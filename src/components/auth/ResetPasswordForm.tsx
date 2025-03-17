"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@heroui/react";
import { FaLock } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  useResetPasswordMutation,
  useGetUserByResetCodeQuery,
} from "@/store/services/authApi";
import { Mail } from "lucide-react";

// Define the schema for the form
const resetPasswordSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export function ResetPasswordForm() {
  const [resetSuccess, setResetSuccess] = useState(false);
  const searchParams = useSearchParams();
  const resetCode = searchParams?.get("resetCode");
  const [unexpError, setUnexpError] = useState(false);

  /**
   * redux mutation and query
   */
  const {
    data: userData,
    isLoading: isUserLoading,
    isError,
  } = useGetUserByResetCodeQuery({ resetCode: resetCode || "" });
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  /**
   * useform hook
   */
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  /**
   *  submit handler
   */
  const onSubmit = async (data: ResetPasswordFormValues) => {
    if (!resetCode) {
      toast.error("Invalid or missing reset resetCode");
      return;
    }

    try {
      const response = await resetPassword({
        email: data.email,
        password: data.password,
        confirmpassword: data.confirmPassword,
        resetcode: resetCode,
      });
      if (response.data?.data) {
        setResetSuccess(true);
        toast.success(response.data?.data || "Password reset successfully");
      }
      if (response.data?.error) {
        toast.error(response.data?.data || "Failed to reset password");
      }
      if ("error" in response) {
        // Type guard to check if it's a FetchBaseQueryError
        const fetchError = response.error;
        if (
          fetchError &&
          "data" in fetchError &&
          fetchError.data &&
          typeof fetchError.data === "object" &&
          "msg" in fetchError.data
        ) {
          toast.error(
            (fetchError.data.msg as string) || "Failed to reset password",
          );
        }
      }
    } catch (error: any) {
      console.log("error", error);
      toast.error(error?.data?.msg || "An error occurred. Please try again.");
    }
  };

  /**
   *
   */
  useEffect(() => {
    if (userData?.data?.response) {
      setValue("email", userData?.data?.response?.email);
    }
    if (userData?.data?.error) {
      toast.error(userData?.data?.data?.msg || "An error occurred");
      setUnexpError(true);
    }
    if (isError) {
      setUnexpError(true);
    }
  }, [userData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {!resetSuccess ? (
        <>
          {unexpError ? (
            <div className="space-y-4 text-center">
              <div className="mb-4 rounded-lg bg-red-50 p-4">
                <p className="text-red-700">
                  Invalid or expired reset code. Please request a new password
                  reset.
                </p>
              </div>
              <Link
                href="/forgot-password"
                className="inline-flex items-center justify-center rounded-md bg-[#FFA600] px-4 py-2 text-sm font-medium text-white hover:bg-[#FFA600]/90"
              >
                Request New Reset Link
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded bg-[#EDEDED] px-4 py-3 pl-10 text-sm text-gray-700 focus:border-none focus:outline-none focus:ring-0"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full rounded bg-[#EDEDED] px-4 py-3 pl-10 text-sm text-gray-700 focus:border-none focus:outline-none focus:ring-0"
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full rounded bg-[#EDEDED] px-4 py-3 pl-10 text-sm text-gray-700 focus:border-none focus:outline-none focus:ring-0"
                    {...register("confirmPassword")}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="flex items-center gap-2 bg-[#FFA600] px-12 py-3 text-lg text-white hover:bg-[#FFA600]/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Resetting..."
                ) : (
                  <>
                    <span>Reset Password</span>
                    <span>
                      <LuMoveRight />
                    </span>
                  </>
                )}
              </Button>
            </>
          )}
        </>
      ) : (
        <div className="space-y-4 text-center">
          <div className="mb-4 rounded-lg bg-green-50 p-4">
            <p className="text-green-700">
              Your password has been reset successfully.
            </p>
          </div>
          <Link href="/login">Go to Login</Link>
        </div>
      )}
    </form>
  );
}

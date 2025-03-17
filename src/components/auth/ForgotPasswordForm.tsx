"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@heroui/react";
import { FaEnvelope } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";
import { toast } from "react-toastify";
import { useForgotPasswordMutation } from "@/store/services/authApi";
import { useState } from "react";
import Link from "next/link";
// Define the schema for the form
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
  const [passwordSent, setPasswordSent] = useState(false);
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    try {
      const response = await forgotPassword(data);
      console.log(response.data.data?.data);
      if (!response.data?.data?.error) {
        setPasswordSent(true);
        toast.success(
          response.data.data?.data ||
            "Password reset instructions sent to your email",
        );
      }
      if (response.data?.data?.error) {
        toast.error(
          response.data?.data?.data || "Failed to send reset instructions",
        );
      }
    } catch (error) {
      toast.error("Failed to send reset instructions. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {!passwordSent ? (
        <>
          <div className="space-y-2">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded bg-[#EDEDED] px-4 py-3 pl-10 text-sm text-gray-700 focus:border-none focus:outline-none focus:ring-0"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="flex items-center gap-2 bg-[#FFA600] px-12 py-3 text-lg text-white hover:bg-[#FFA600]/90"
          >
            <span>Send Reset Instructions</span>
            <span>
              <LuMoveRight />
            </span>
          </Button>
        </>
      ) : (
        <div className="space-y-4 text-center">
          <div className="mb-4 rounded-lg bg-green-50 p-4">
            <p className="text-green-700">
              Password reset instructions have been sent to your email address.
            </p>
          </div>
          <Link href="/login">
            <span>Back to Login</span>
          </Link>
        </div>
      )}
    </form>
  );
}

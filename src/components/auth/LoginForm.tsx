"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@heroui/react";
import { FaUser, FaLock } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";
import { useLoginMutation } from "@/store/services/authApi";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import {
  setUser,
  setToken,
  setIsAuthenticated,
} from "@/store/slices/authSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
/**
 * login form schema
 */
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const searchParams = useSearchParams();
  const redirect = searchParams?.get("redirect");
  const router = useRouter();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data: LoginFormValues) => {
    const response = await login({
      email: data.username,
      password: data.password,
    });
    if (response?.data?.data.token) {
      const { token } = response.data.data;
      const decodedToken: any = jwt.decode(token);
      dispatch(setUser(decodedToken));
      dispatch(setToken(token));
      dispatch(setIsAuthenticated(true));
      router.push(redirect || "/admin/blogs");
    } else if (!response?.data.status) {
      toast.error(response?.data?.msg);
      console.log(response.error);
      alert(response?.data?.msg);
    } else if (error) {
      toast.error((error as any)?.message || "Something went wrong");
      alert((error as any)?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            placeholder="Username"
            className="w-full rounded bg-[#EDEDED] px-4 py-3 pl-10 text-sm text-gray-700 focus:border-none focus:outline-none focus:ring-0"
            {...register("username")}
          />
        </div>
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded bg-[#EDEDED] px-4 py-3 pl-10 text-sm text-gray-700 focus:border-none focus:outline-none focus:ring-0"
            {...register("password")}
          />
        </div>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="flex items-center gap-2 bg-[#FFA600] px-12 py-3 text-lg text-white hover:bg-[#FFA600]/90"
        disabled={isLoading}
      >
        {isLoading ? (
          "loading..."
        ) : (
          <>
            <span>Login</span>
            <span>
              <LuMoveRight />
            </span>
          </>
        )}
      </Button>
    </form>
  );
}

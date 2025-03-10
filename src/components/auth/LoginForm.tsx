import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@heroui/react";
import { FaUser, FaLock } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";

/**
 * login form schema
 */
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

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
      >
        <span>Login</span>
        <span>
          <LuMoveRight />
        </span>
      </Button>
    </form>
  );
}

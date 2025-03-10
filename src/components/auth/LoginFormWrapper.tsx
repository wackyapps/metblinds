"use client";

import { LoginForm } from "./LoginForm";
import { useRouter } from "next/navigation";
export function LoginFormWrapper() {
  const router = useRouter();
  const handleSubmit = async () =>
    // data: { username: string; password: string }

    {
      try {
        // Handle login logic here
        router.push("/admin/admin-panel");
        // You can make API calls here
      } catch (error) {
        console.error("Login failed:", error);
      }
    };

  return <LoginForm onSubmit={handleSubmit} />;
}

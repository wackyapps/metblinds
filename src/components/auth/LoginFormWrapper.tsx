"use client";

import { LoginForm } from "./LoginForm";

export function LoginFormWrapper() {
  const handleSubmit = async (data: { username: string; password: string }) => {
    try {
      // Handle login logic here
      console.log(data);
      // You can make API calls here
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
}

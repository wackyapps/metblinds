import { LoginForm } from "@/components/auth/LoginForm";
import { Suspense } from "react";
import { Metadata } from "next";
import authPages from "@/configs/pages-data/authPages";

export const metadata: Metadata = {
  title: authPages.loginMetaData.title,
  description: authPages.loginMetaData.description,
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-stretch gap-5 p-6 md:flex-grow md:justify-center">
      <h2 className="text-3xl font-semibold text-[#FFA600] after:bottom-0 after:left-0 after:h-2 after:w-1/2 after:bg-[#FFA600] md:text-4xl">
        Hello!
      </h2>
      <p className="mb-5 text-left text-gray-500">Welcome back</p>

      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}

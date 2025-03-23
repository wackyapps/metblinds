import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import authPages from "@/configs/pages-data/authPages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: authPages.forgotPasswordMetaData.title,
  description: authPages.forgotPasswordMetaData.description,
};

const ForgotPasswordPage = () => {
  return (
    <div className="flex flex-col items-stretch gap-5 p-6 md:flex-grow md:justify-center">
      <h2 className="text-3xl font-semibold text-[#FFA600] after:bottom-0 after:left-0 after:h-2 after:w-1/2 after:bg-[#FFA600] md:text-4xl">
        Hello!
      </h2>
      <p className="mb-5 text-left text-gray-500">Welcome back</p>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;

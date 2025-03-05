import { LoginFormWrapper } from "@/components/auth/LoginFormWrapper";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/login-bg.jpg"
            alt="Login Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Login Card */}
        <div className="relative mx-auto flex h-full max-w-[1026px] items-center justify-center">
          <div className="w-full rounded-lg bg-white p-8 shadow-lg">
            <div className="mb-8">
              <div className="mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={97}
                  height={30}
                  className="mx-auto"
                />
              </div>
              <p className="text-center text-gray-500">Welcome back</p>
            </div>
            <LoginFormWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}

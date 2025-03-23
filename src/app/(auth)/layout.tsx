export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen w-full bg-white"
      style={{
        background:
          "linear-gradient(#ffffffb8,#ffffffb8) , url('/backgrounds/admin-login-background.png')",
      }}
    >
      <div className="relative h-screen w-full">
        {/* Login Card */}
        <div className="relative mx-auto flex h-full max-w-[1026px] items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-lg md:flex-row md:gap-8">
            <div className="md:basis-[50%]">
              <div className="relative h-full w-full max-md:h-[200px] md:min-h-[500px]">
                <div className="flex h-full w-full items-center">
                  <img
                    className="relative z-10 mx-auto w-[80%] max-w-[303px]"
                    src="/metblinds-logo.png"
                    alt=""
                  />
                </div>
                <div className="absolute left-0 top-0 h-full w-full bg-[#FFA600]">
                  <img
                    src="/images/login-side-image.png"
                    alt="Logo"
                    className="h-full w-full object-cover opacity-65"
                  />
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

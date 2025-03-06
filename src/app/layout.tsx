import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";
import TopNav from "@/components/navigation/TopNav";
import MainNavbar from "@/components/navigation/MainNavbar";
import Footer from "@/components/navigation/Footer";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "MetBlinds",
  description: "metblinds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <StoreProvider>
          <TopNav />
          <MainNavbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

import TopNav from "@/components/navigation/TopNav";

import MainNavbar from "@/components/navigation/MainNavbar";
import Footer from "@/components/navigation/Footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopNav />
      <MainNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

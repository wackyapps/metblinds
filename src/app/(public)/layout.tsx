import TopNav from "@/components/navigation/TopNav";
import "react-toastify/dist/ReactToastify.css";

import MainNavbar from "@/components/navigation/MainNavbar";
import Footer from "@/components/navigation/Footer";
import { ToastContainer, Bounce } from "react-toastify";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopNav />
      <MainNavbar />
      {children}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Layout;

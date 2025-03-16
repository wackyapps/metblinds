"use client";
import { websiteInfo } from "@/configs/info";
import { useDispatch } from "react-redux";
import { setToken, setIsAuthenticated, logout } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
const AdminNavbar = () => {
  const logo = websiteInfo.logo;
  const dispatch = useDispatch();
  const router = useRouter();
  const logoutHandler = () => {
    dispatch(setToken(""));
    dispatch(setIsAuthenticated(false));
    dispatch(logout());
    router.push("/auth/login");
  };
  return (
    <div className="global-container">
      <div className="flex items-center justify-between px-3">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img width={200} height={50} src={logo.src} alt={logo.alt} />
          </Link>
        </div>
        <div className="flex items-center">
          <button
            onClick={logoutHandler}
            className="my-3 rounded-md bg-[#FFA600] px-10 py-2.5 text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;

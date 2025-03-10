import { websiteInfo } from "@/configs/info";

const AdminNavbar = () => {
  const logo = websiteInfo.logo;
  return (
    <div className="global-container">
      <div className="flex items-center justify-between px-3">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img width={200} height={50} src={logo.src} alt={logo.alt} />
        </div>
        <div className="flex items-center">
          <button className="my-3 rounded-md bg-[#FFA600] px-10 py-2.5 text-white">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;

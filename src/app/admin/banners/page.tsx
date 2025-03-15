import BannersContainerAdmin from "@/components/admin/BannersContainerAdmin";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <BannersContainerAdmin />
      <Link
        href="/admin/banners/add"
        className="fixed bottom-10 right-10 z-40 rounded-full bg-red-400 p-4 text-2xl text-white"
      >
        <FaPlus />
      </Link>
    </div>
  );
};

export default page;

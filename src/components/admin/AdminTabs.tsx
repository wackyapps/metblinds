"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminTabs = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const tabs = [
    {
      label: "Blogs",
      link: "/admin/blogs",
    },
    {
      label: "Add A Banner",
      link: "/admin/add-banner",
    },
  ];
  return (
    <div className="global-container mt-5">
      <div className="px-3">
        <div className="overflow-hidden rounded-[31px] bg-[#F7F9FA]">
          <div className="flex items-center justify-start">
            {tabs.map((button, index) => (
              <Link
                key={index}
                className={`px-9 py-5 ${pathname == button.link ? "bg-[#FFA600] text-white" : "text-[#FFA600]"}`}
                href={button.link}
              >
                {button.label}
              </Link>
            ))}
          </div>
          <div className="px-8 py-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminTabs;

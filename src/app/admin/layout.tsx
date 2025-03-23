import AdminTabs from "@/components/admin/AdminTabs";
import AdminNavbar from "@/components/navigation/AdminNavbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - Met Blinds",
  description: "Admin - Met Blinds",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNavbar />
      <AdminTabs>{children}</AdminTabs>
    </div>
  );
};

export default AdminLayout;

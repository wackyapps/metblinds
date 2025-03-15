import AdminTabs from "@/components/admin/AdminTabs";
import AdminNavbar from "@/components/navigation/AdminNavbar";
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNavbar />
      <AdminTabs>{children}</AdminTabs>
    </div>
  );
};

export default AdminLayout;

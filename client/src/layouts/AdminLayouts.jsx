import { Outlet } from "react-router-dom";
import Sidebar from "../admin/components/ReusedComponents/Sidebar";
import TopNavbar from "../admin/components/ReusedComponents/TopNavbar";

const AdminLayout = () => {
  return (
    <div className="flex h-dvh overflow-hidden">
      <Sidebar />

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <TopNavbar />

        <main className="min-h-0 min-w-0 flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

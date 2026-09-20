import { Outlet } from "react-router-dom";
import Sidebar from "../admin/components/ReusedComponents/Sidebar";
import TopNavbar from "../admin/components/ReusedComponents/TopNavbar";

const AdminLayout = () => {
  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <div className="w-full">
        <TopNavbar />

        <section className="flex-1">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default AdminLayout;

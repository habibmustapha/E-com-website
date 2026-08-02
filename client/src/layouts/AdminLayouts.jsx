import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <main className="min-h-screen items-center">
      <Outlet />
    </main>
  );
};

export default AdminLayout;

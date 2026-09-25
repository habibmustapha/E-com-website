import { Outlet } from "react-router-dom";
import Navbar from "../HomeComponents/Navbar";
import Header from "../HomeComponents/Header";
import Sidebar from "../AccountComponents/Sidebar";

const ProfileLayouts = () => {
  return (
    <main className="min-h-screen ">
      <Header />
      <Navbar />
      <div className=" gap-2 flex pt-34 w-full">
        <Sidebar />

        <section className="p-5 w-10/12">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default ProfileLayouts;

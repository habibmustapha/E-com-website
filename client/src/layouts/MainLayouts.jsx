import { Outlet } from "react-router-dom";
import Navbar from "../HomeComponents/Navbar";
import Header from "../HomeComponents/Header";
import Footer from "../HomeComponents/Footer";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="mt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayouts;

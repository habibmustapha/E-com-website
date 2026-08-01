import { Outlet } from "react-router-dom";
import Navbar from "../HomeComponents/Navbar";
import Header from "../HomeComponents/Header";
import Footer from "../HomeComponents/Footer";
import { useState } from "react";

const MainLayouts = () => {
  const [dark, setDark] = useState(false);
  return (
    <>
      <div className={dark ? "dark" : ""}>
        <Header dark={dark} setDark={setDark} />
        <Navbar />
        <main className="mt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayouts;

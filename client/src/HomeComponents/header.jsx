import logo from "../assets/logoZ.png";
import icon from "../assets/logoZi.png";
import profile from "../assets/profile.jpg";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="fixed top-0 w-full z-30 border-b border-gray-300  bg-background flex items-center h-24 pr-2 xl:pr-7 ">
        <div className="w-3/12 pl-5">
          <a href="/">
            <img
              src={icon}
              className="w-14 block min-[500px]:hidden"
              alt="logo"
            />
            <img
              src={logo}
              className="w-64 hidden min-[500px]:block"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex w-5/12 items-center bg-white rounded-full shadow-sm border border-border px-4">
          <input
            className="w-full bg-transparent py-2 outline-none"
            placeholder="Search..."
          />
          <CiSearch className="cursor-pointer" />
        </div>
        <div className="flex w-4/12 justify-end items-center gap-2 md:gap-4 xl:gap-5 pl-2 pr-1 md:pr-4 xl:pr-5">
          <a>
            <FaHeart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-primary" />
          </a>
          <a>
            <img
              src={profile}
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 border rounded-full border-primary"
              alt="profile_picture"
            />
          </a>
          <Link to={"/cart"}>
            <MdShoppingCart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 cursor-pointer text-primary" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;

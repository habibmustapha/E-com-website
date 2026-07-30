import logo from "../assets/logoZ.png";
import icon from "../assets/logoZi.png";
import profile from "../assets/profile.webp";
import { MdShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <section className="fixed w-full z-30 border-b border-gray-300  bg-background flex items-center h-24 pr-2 xl:pr-7 ">
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
        <div className="flex w-6/12 items-center bg-white rounded-full shadow-sm border border-border px-4">
          <input
            className="w-full bg-transparent py-2 outline-none"
            placeholder="Search products..."
          />
          <CiSearch className="cursor-pointer" />
        </div>
        <div className="flex w-3/12 justify-end items-center pl-2 pr-5">
          <a>
            <FaHeart />
          </a>
          <a>
            <img src={profile} className="w-12 " alt="profile_picture" />
          </a>
          <a>
            <MdShoppingCart size={22} className="text-primborder-primary" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Header;

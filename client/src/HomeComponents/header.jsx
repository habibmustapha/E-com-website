import logo from "../assets/logoZ.png";
import icon from "../assets/logoZi.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

// import profile from "../assets/profile.jpg";
// import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = ({ dark, setDark }) => {
  // const [dark, setDark] = useState(false);
  return (
    <>
      <section className="fixed top-0 w-full z-30 border-b border-gray-300  bg-background text-text flex items-center h-24 pr-2 xl:pr-7 ">
        <div className="w-3/12 pl-5">
          <a href="/">
            <img
              src={icon}
              className="w-14 block min-[700px]:hidden"
              alt="logo"
            />
            <img
              src={logo}
              className="w-64 hidden min-[700px]:block"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex w-5/12 items-center bg-card rounded-full shadow-sm border border-border px-4">
          <input
            className="w-full bg-transparent py-2 outline-none"
            placeholder="Search..."
          />
          <CiSearch className="cursor-pointer" />
        </div>
        <div className="flex w-4/12 justify-end items-center gap-4 md:gap-4 xl:gap-5 pl-2 pr-1 md:pr-4 xl:pr-5">
          {/* <a>
            <FaHeart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 text-primary" />
          </a>
          <a>
            <img
              src={profile}
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 border rounded-full border-primary"
              alt="profile_picture"
            />
          </a> */}
          <div className="w-20 p-1 bg-accent rounded-2xl">
            {dark ? (
              <CiLight
                size={32}
                className="justify-self-start text-buttons"
                onClick={() => setDark(!dark)}
              />
            ) : (
              <MdDarkMode
                size={32}
                className="justify-self-end text-left text-buttons"
                onClick={() => setDark(!dark)}
              />
            )}
          </div>
          <Link to="/contact">
            <FaPhoneAlt className="block min-[800px]:hidden text-buttons text-xl" />

            <h3 className="hidden min-[800px]:block bg-buttons px-3 py-2 rounded-xl">
              Contact Us
            </h3>
          </Link>
          <Link to={"/cart"}>
            <MdShoppingCart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 cursor-pointer text-buttons" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;

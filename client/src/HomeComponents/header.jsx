import logo from "../assets/logoZ.png";
import icon from "../assets/logoZi.png";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdDarkMode } from "react-icons/md";
// import { CiLight } from "react-icons/ci";
// import { HiOutlineShoppingCart } from "react-icons/hi2";

// import profile from "../assets/profile.jpg";
// import { FaHeart } from "react-icons/fa";
// import { MdShoppingCart } from "react-icons/md";

import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  // const [dark, setDark] = useState(false);
  return (
    <>
      <section className="fixed top-0 w-full z-30 border-b border-gray-300  bg-surface font-semibold text-text flex items-center h-24 pr-2 xl:pr-7 ">
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
        <div className="flex w-5/12 items-center bg-card rounded-full border border-border px-4">
          <input
            className="w-full text-sm font-light bg-transparent py-2 outline-none"
            placeholder="Search for phones, laptops, accessories..."
          />
          <CiSearch className="cursor-pointer" />
        </div>

        <div className="flex w-4/12 justify-end items-center gap-4 md:gap-4 xl:gap-5 pl-2 pr-1 md:pr-4 xl:pr-5">
          <div className="grid grid-cols-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart"
              className="justify-self-center"
            >
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
            </svg>
            <h1 className="text-center justify-center min-w">Wishlist</h1>
          </div>

          <div className="grid grid-cols-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round"
              className="justify-self-center"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <h1 className="text-center justify-center min-w">Account</h1>
          </div>
          <Link to={"/cart"}>
            <div className="grid grid-cols-1 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart"
                className=" justify-self-center"
              >
                <path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18" />
                <path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25" />
                <circle cx="18" cy="20" r="2" />
                <circle cx="8" cy="20" r="2" />
              </svg>
              <div className=" bg-danger absolute -top-2 -right-2 justify-center items-center min-w-5 h-5 px-1 rounded-full">
                <h4 className="text-sm text-white text-center">2</h4>
              </div>
              <h1 className="text-center justify-center min-w">Cart</h1>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;

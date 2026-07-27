import logo from "../assets/logoZ.png";
import icon from "../assets/logoZi.png";
import profile from "../assets/profile.webp";
import { MdShoppingCart } from "react-icons/md";

// import { CiSearch } from "react-icons/ci";

const header = () => {
  return (
    <>
      <section className="bg-background flex items-center h-24 pr-2 xl:pr-7 ">
        <div className="w-3/12 pl-5">
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
        </div>
        <div className="flex w-6/12 items-center bg-white rounded-full shadow-sm border border-border px-4">
          <input
            className="w-full bg-transparent py-2 outline-none"
            placeholder="Search products..."
          />
        </div>
        <div className="flex w-3/12 justify-end items-center pr-5">
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

export default header;

import logo from "../assets/logoZ.png";
import profile from "../assets/profile.webp";
import { MdShoppingCart } from "react-icons/md";

import { CiSearch } from "react-icons/ci";

const header = () => {
  return (
    <>
      <section className="bg-white flex items-center h-24 pr-7 ">
        <div className="w-1/3">
          <img src={logo} className="w-64" alt="logo" />
        </div>
        <div className="flex w-1/3 h-8">
          <input
            className="inset-shadow-sm rounded-xl w-8/12 py-2 px-4"
            placeholder="Search for a product"
          ></input>
          <a className=" h-fit ">
            <CiSearch size={30} />
          </a>
        </div>
        <div className="flex w-1/3 justify-end gap-5 items-center">
          <button className="bg-yellow-500 text-white px-7 py-1 rounded-2xl">
            CONTACT-US
          </button>
          <a>
            <img
              src={profile}
              className="w-14 border-2 border-yellow-500 rounded-2xl"
              alt="profile_picture"
            />
          </a>
          <a>
            <MdShoppingCart size={28} className="text-yellow-500" />
          </a>
        </div>
      </section>
    </>
  );
};

export default header;

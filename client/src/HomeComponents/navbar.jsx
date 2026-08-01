import { Menu, X } from "lucide-react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [IsOpen, SetIsOpen] = useState(false);
  const [IsCategoryOpen, SetIsCategoryOpen] = useState(false);

  return (
    <section className="bg-yellow-500 fixed top-23 md:justify-center w-full z-20 h-10 flex px-6">
      {/* Desktop Menu */}
      <div className="hidden min-[800px]:flex md: text-white gap-16 h-full items-center justify-center text-lg">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <div className="group relative">
          <a href="/categories">Categories</a>
          <div
            className="absolute top-10 bg-dropdown text-text w-140 pt-2 px-3 py-3 rounded-lg opacity-0 invisible
       transition-all duration-200
       group-hover:opacity-100
       group-hover:visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 cursor-pointer">
              <div>
                <h1 className="text-sm font-bold">New phones</h1>
                <ul className="text-sm">
                  <li>Iphone</li>
                  <li>Samsung</li>
                  <li>Oppo</li>
                  <li>Realme</li>
                </ul>
              </div>
              <div>
                <h1 className="text-sm font-bold">Used phones</h1>
                <ul className="text-sm">
                  <li>Iphone</li>
                  <li>Samsung</li>
                  <li>Oppo</li>
                  <li>Realme</li>
                </ul>
              </div>
              <div>
                <h1 className="text-sm font-bold">Tablet</h1>
                <ul className="text-sm">
                  <li>Ipad</li>
                  <li>Samsung</li>
                  <li>Xiaomi</li>
                  <li>Realme</li>
                </ul>
              </div>
              <div>
                <h1 className="text-sm font-bold">Accessories</h1>
                <ul className="text-sm">
                  <li>Ear Pods</li>
                  <li>Smartwatch</li>
                  <li>Power Bank</li>
                  <li>Cables</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a href="/deals">Deals</a>
      </div>

      {/* Mobile Menu Button */}

      <button
        className={`relative min-[800px]:hidden left-2 ${IsOpen ? "top-7 z-30" : "top-0"} items-center pt-1`}
        onClick={() => SetIsOpen(!IsOpen)}
      >
        {IsOpen ? <X size={28} className="fixed" /> : <Menu size={28} />}
      </button>
      {IsOpen && (
        <div className="bg-white xl:h-fit px-13 py-2 fixed grid top-34 left-5 rounded-xl shadow-xl cursor-pointer items-center text-lg">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <div className="w-full gap-2">
            <a href="/categories" className="cursor-pointer">
              Categories
            </a>
            <button
              className="pl-5"
              onClick={() => SetIsCategoryOpen(!IsCategoryOpen)}
            >
              <IoIosArrowForward />
            </button>
          </div>
          {IsCategoryOpen && (
            <div>
              <div className="absolute left-full ml-1 top-16 bg-white w-64 md:w-140 px-3 py-3 mr-10 shadow-xl rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5  cursor-pointer">
                  <div>
                    <h1 className="text-sm font-bold">New phones</h1>
                    <ul className="text-sm">
                      <li>Iphone</li>
                      <li>Samsung</li>
                      <li>Oppo</li>
                      <li>Realme</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="text-sm font-bold">Used phones</h1>
                    <ul className="text-sm">
                      <li>Iphone</li>
                      <li>Samsung</li>
                      <li>Oppo</li>
                      <li>Realme</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="text-sm font-bold">Tablet</h1>
                    <ul className="text-sm">
                      <li>Ipad</li>
                      <li>Samsung</li>
                      <li>Xiaomi</li>
                      <li>Realme</li>
                    </ul>
                  </div>
                  <div>
                    <h1 className="text-sm font-bold">Accessories</h1>
                    <ul className="text-sm">
                      <li>Ear Pods</li>
                      <li>Smartwatch</li>
                      <li>Power Bank</li>
                      <li>Cables</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          <a href="/deals">Deals</a>
        </div>
      )}
    </section>
  );
};

export default Navbar;

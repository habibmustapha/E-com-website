import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <section className="bg-yellow-500 relative top-23 z-20 h-10 flex  justify-center px-6">
      {/* Desktop Menu */}
      <div className="hidden min-[800px]:flex gap-16 h-full items-center justify-center text-lg">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <div className="group relative">
          <a href="/categories">Categories</a>
          <div
            className="absolute top-10 bg-white w-140 pt-2 px-3 py-3 rounded-lg opacity-0 invisible
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
      <button className="min-[800px]:hidden">
        <Menu size={28} />
      </button>
    </section>
  );
};

export default Navbar;

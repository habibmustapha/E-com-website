import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <section className="bg-yellow-500 relative top-23 z-20 h-10 flex  justify-center px-6">
      {/* Desktop Menu */}
      <div className="hidden min-[800px]:flex gap-16 h-full items-center justify-center text-lg">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/categories">categories</a>
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

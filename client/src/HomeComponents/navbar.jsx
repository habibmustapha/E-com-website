import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <section className="bg-yellow-500 h-10 flex items-center justify-center px-6">
      {/* Desktop Menu */}
      <div className="hidden min-[800px]:flex gap-16 text-lg">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/categories">Categories</a>
        <a href="/new">New Arrivals</a>
        <a href="/deals">Deals</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button className="min-[800px]:hidden">
        <Menu size={28} />
      </button>
    </section>
  );
};

export default Navbar;

const Navbar = () => {
  return (
    <>
      <section className="bg-yellow-500 flex items-center justify-center h-10 text-lg font-normal">
        <div className="flex gap-16">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/categories">Categories</a>
          <a href="/new">New Arrivals</a>
          <a href="/deals">Deals</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </section>
    </>
  );
};

export default Navbar;

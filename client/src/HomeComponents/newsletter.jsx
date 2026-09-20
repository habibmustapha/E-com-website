const Newsletter = () => {
  return (
    <>
      <section className="bg-linear-to-br from-amber-200 to-buttons overflow-hidden relative text-text py-14 px-10 md:px-20">
        <span className="absolute -top-32 -right-10 w-42 h-135 bg-white/60 blur-2xl shin pointer-events-none"></span>
        <div className="pb-7 ">
          <h1 className="text-2xl font-bold">Subscribe to Our Newsletter</h1>
          <p className="text-xl font-medium">
            Get the latest updates on new products and upcoming sales
          </p>
        </div>
        <div className="flex gap-5">
          <input
            className="bg-yellow-50 w-82 px-3 py-2 rounded-xl shadow-lg"
            placeholder="Enter your email"
          ></input>
          <button className="px-3 py-2 cursor-pointer bg-accent rounded-xl shadow-lg font-semibold">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default Newsletter;

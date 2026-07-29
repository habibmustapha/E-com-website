const Newsletter = () => {
  return (
    <>
      <section className="bg-primary py-14 px-20">
        <div className="pb-7">
          <h1 className="text-2xl font-bold">Subscribe to Our Newsletter</h1>
          <p className="text-xl font-medium">
            Get the latest updates on new products and upcoming sales
          </p>
        </div>
        <div className="flex gap-5">
          <input
            className="bg-input w-82 px-3 py-2 rounded-xl "
            placeholder="Enter your email"
          ></input>
          <button className="px-3 py-2 cursor-pointer bg-whitebutton rounded-xl font-semibold">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default Newsletter;

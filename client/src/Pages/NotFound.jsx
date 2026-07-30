import notfound from "../assets/404.png";

const NotFound = () => {
  return (
    <>
      <section className="py-5 md:py-10 xl-py-20 px-5 md:px-10 xl:px-20">
        <div className="grid justify-center">
          <div className="items-center justify-center">
            <img
              src={notfound}
              className="w-125 justify-self-center"
              alt="Not Found Image"
            />
            <h1 className="text-6xl font-bold">Oops, 404 Not Found!!</h1>
          </div>
          <div className="grid pt-5 items-center justify-center">
            <h3 className="text-2xl justify-self-center">Please GO back</h3>
            <a href="/shop">
              <button className="w-64 cursor-pointer bg-buttons px-10 py-3 rounded-xl shadow-xl">
                Explore our products
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;

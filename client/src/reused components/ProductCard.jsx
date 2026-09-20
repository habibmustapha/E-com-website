import { MdShoppingCart } from "react-icons/md";
// import { FaHeart } from "react-icons/fa";

const ProductCard = ({ products }) => {
  const percentage = 100 - (products.promo_price / products.price) * 100;
  return (
    <>
      <div className="group bg-card text-text h-130 xl:h-150 flex flex-col rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden">
        <div className="relative h-44 md:h-56 xl:h-64 shrink-0">
          <div className="absolute top-4 left-4 flex gap-2">
            {products.rating && Number(products.rating) >= 4.5 ? (
              <div className="w-fit px-3 z-10 bg-primary text-white rounded-2xl">
                <h5 className="text-xs">bestseller</h5>
              </div>
            ) : (
              <></>
            )}

            {products.promo_price ? (
              <div className="w-fit px-3 z-10 bg-success text-white rounded-2xl">
                <h3 className="text-xs">{Math.round(percentage)} %</h3>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 text-danger ">
            <FaHeart size={20} />
          </button> */}
          <img
            src={products.image_url}
            alt={products.name}
            className="w-full h-full p-3 rounded-3xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="px-3 flex flex-col flex-1 overflow-hidden">
          <div className="h-16 md:h-14 pb-2">
            <h3 className="text-lg xl:text-xl line-clamp-2">{products.name}</h3>
          </div>
          <p className="text-xs xl:text-sm text-gray-500 h-16 mb-5 line-clamp-3">
            {products.description}
          </p>
          <div className="grid grid-cols-1 h-fit pb-7">
            <div className="flex min-h-20 items-end justify-between">
              <div>
                {products.promo_price ? (
                  <div className="grid items-center ">
                    <h3 className="text-lg xl:text-xl text-green-700 ">
                      {products.promo_price &&
                        Number(products.promo_price).toLocaleString(
                          "fr-DZ",
                        )}{" "}
                      Dzd
                    </h3>
                    <span className=" text-md text-danger line-through">
                      {products.price &&
                        Number(products.price).toLocaleString("fr-DZ")}{" "}
                      Dzd
                    </span>
                  </div>
                ) : (
                  <h3 className="w-full text-lg xl:text-xl text-green-700 float-right">
                    {products.price &&
                      Number(products.price).toLocaleString("fr-DZ")}{" "}
                    Dzd
                  </h3>
                )}

                <div className="mt-2 min-h-10">
                  {products.qty > 0 ? (
                    <p className="text-base text-green-700"> In Stock </p>
                  ) : (
                    <p className="text-base text-red-700"> Out Of Stock </p>
                  )}

                  {products.qty < 3 && products.qty > 0 ? (
                    <div className="w-fit px-3 z-10 bg-danger rounded-2xl">
                      <h3 className="text-xs text-white">
                        only {products.qty} left
                      </h3>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="flex bg-buttons hover:bg-primary-hover cursor-pointer gap-2 items-center h-fit xl:h-10 px-5 py-5 rounded-xl">
                {/* <p className="hidden min-[1900px]:block">add to cart</p> */}

                <MdShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

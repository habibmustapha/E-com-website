import { MdShoppingCart } from "react-icons/md";

const ProductCard = ({ products }) => {
  return (
    <>
      <div className="bg-white grid-cols-1 gap-10 xl:gap-20 rounded-xl shadow-xl hover:shadow-2xl">
        <div className="relative h-42 md:h-56 xl:h-72">
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-fit px-3 z-10 bg-primary rounded-2xl">
              <h5 className="text-xs">bestseller</h5>
            </div>
            {products.promo ? (
              <div className="w-fit px-3 z-10 bg-primary rounded-2xl">
                <h3 className="text-xs">{products.per}</h3>
              </div>
            ) : (
              <></>
            )}
          </div>
          <img
            src={products.image}
            alt={products.name}
            className="w-full h-full p-3 rounded-2xl  object-contain"
          />
        </div>
        <div className="px-3 overflow-hidden">
          <div className="h-14 md:h-10 pb-2">
            <h3 className="text-lg xl:text-xl line-clamp-2">{products.name}</h3>
          </div>
          <p className="text-xs xl:text-sm text-gray-500 h-16 line-clamp-3">
            {products.description}
          </p>
          <div className="grid grid-cols-1 h-fit pb-7">
            <div className="flex justify-between">
              <div>
                {products.promo ? (
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg xl:text-xl text-green-700 float-right">
                      {products.promo_price} $
                    </h3>
                    <span className=" text-sm line-through">
                      {products.price} $
                    </span>
                  </div>
                ) : (
                  <h3 className="w-full text-lg xl:text-xl text-green-700 float-right">
                    {products.price} $
                  </h3>
                )}

                <div className="h-10">
                  {products.stock > 0 ? (
                    <p className="text-base text-green-700"> In Stock </p>
                  ) : (
                    <p className="text-base text-red-700"> Out Of Stock </p>
                  )}
                </div>
              </div>

              <div className="flex bg-primary hover:bg-primary-hover cursor-pointer gap-2 items-center px-5 xl:py-2 rounded-xl">
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

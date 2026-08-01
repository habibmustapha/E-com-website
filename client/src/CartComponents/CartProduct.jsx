import TotalPrice from "./TotalPrice";
import { products } from "../data/DumyData";
import { X } from "lucide-react";

const CartProduct = () => {
  return (
    <>
      <section className="bg-background text-text grid md:flex py-14 md:py-20 xl:py-20 md:px-5 md:pr-10 ">
        {/* desktop cart */}
        <div className="w-full md:w-8/12 px-5 hidden min-[800px]:block">
          <table className="w-full mt-5 gap-20 ">
            <thead>
              <tr className="h-10 border-b border-gray-300">
                <th> </th>
                <th className="w-7/12 text-left">product</th>
                <th>price</th>
                <th>quantity</th>
                <th>Sub-total</th>
              </tr>
            </thead>
            {products.slice(0, 3).map((product) => (
              <tbody className="border-b border-gray-300">
                <tr className="w-full">
                  <td>
                    <X className="text-text  hover:text-danger cursor-pointer" />
                  </td>
                  <td className=" px-2">
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        className="w-12 md:w-24 h-12 md:h-18"
                        alt=""
                      />
                      <h1 className="text-sm line-clamp-3 md:line-clamp-2">
                        {product.name}
                      </h1>
                    </div>
                  </td>
                  <td className="text-center">{product.price}</td>
                  <td className="">
                    <div className="flex justify-center">
                      <button className="w-6 md:w-8 h-8 border border-gray-300">
                        +
                      </button>
                      <span className="w-6 md:w-8 h-8 justify-center flex items-center border border-gray-300">
                        3
                      </span>
                      <button className="w-6 md:w-8 h-8 border border-gray-300">
                        -
                      </button>
                    </div>
                  </td>
                  <td className="text-danger text-center">
                    {product.price} * {product.stock}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="pt-5 flex gap-5">
            <input
              type="text"
              className="border border-gray-300 py-2 px-5"
              placeholder="Code promo"
            />
            <button className="bg-primary px-5 py-2 rounded-lg cursor-pointer shadow-xl hover:shadow-sm">
              Apply cupon
            </button>
          </div>
        </div>

        {/* mobile cart */}
        <div className="px-3  pt-5 block min-[800px]:hidden">
          {products.slice(0, 3).map((product) => (
            <div>
              <div className="flex pt-5 border-b border-gray-300 w-full">
                <X className="pt-3 h-8 w-8 text-danger hover:text-danger cursor-pointer" />
                <div className="flex-1 items-center">
                  <img
                    src={product.image}
                    className="w-24 h-auto justify-self-start"
                    alt=""
                  />
                </div>
                <div className="min-w-68 grid grid-cols-1">
                  <h3 className="h-10 pt-3">{product.name}</h3>
                  <div className="flex w-full h-fit justify-between items-center border-b py-2 border-gray-300">
                    <h3 className="font-bold text-gray-400">price</h3>
                    <h3 className="text-right">{product.price}</h3>
                  </div>
                  <div className="flex h-fit items-center w-full justify-between border-b py-2 border-gray-300">
                    <h3 className="font-bold text-gray-400">Quantity</h3>
                    <div className="flex justify-end">
                      <button className="w-6 md:w-8 h-8 border border-gray-300">
                        +
                      </button>
                      <span className="w-6 md:w-8 h-8 justify-center flex items-center border border-gray-300">
                        3
                      </span>
                      <button className="w-6 md:w-8 h-8 border border-gray-300">
                        -
                      </button>
                    </div>
                  </div>
                  <div className="flex w-full h-10 items-center justify-between  py-2 border-gray-300">
                    <h3 className="font-bold text-gray-400">Sub Total</h3>
                    <h3 className="text-danger">{product.price} $</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="pt-5 flex gap-5">
            <input
              type="text"
              className="border border-gray-300 py-2 px-5"
              placeholder="Code promo"
            />
            <button className="bg-primary px-5 py-2 rounded-lg cursor-pointer shadow-xl hover:shadow-sm">
              Apply cupon
            </button>
          </div>
        </div>
        <div className="w-full md:w-4/12 px-3 pt-10 md:pt-4 h-fit">
          <TotalPrice />
        </div>
      </section>
    </>
  );
};

export default CartProduct;

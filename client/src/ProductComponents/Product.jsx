import { products } from "../data/DumyData";
import { MdShoppingCart } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  const [activeTab, setActiveTab] = useState("description");
  return (
    <>
      <section className="py-5 md:py-20 px-5 md:px-20 xl:px-30">
        <div>
          <h3 className="text-xl pb-5 underline underline-offset-4">
            Home / {product.category} / {product.name}
          </h3>
        </div>
        <div className="flex gap-10">
          <div className="w-5/12 h-fit border border-gray-300 ">
            <img src={product.image} alt="iphone 17 pro" />
            <div className=" flex  ">
              {product.images.map((pic, index) => (
                <img
                  key={index}
                  src={pic}
                  className="w-1/3 border border-gray-300"
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="w-6/12 grid grid-cols-1">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="h-fit min-h-64">{product.description}</p>
            <p>
              <span className="font-bold">category:</span> {product.category}
            </p>
            <p>
              <span className="font-bold">brand:</span> Iphone
            </p>

            <div>
              <div className="h-10">
                {product.stock > 0 ? (
                  <p className="text-base text-green-700"> In Stock </p>
                ) : (
                  <p className="text-base text-red-700"> Out Of Stock </p>
                )}

                {product.stock < 3 ? (
                  <div className="w-fit px-3 z-10 bg-danger rounded-2xl">
                    <h3 className="text-xs text-white">
                      only {product.stock} left
                    </h3>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex justify-between">
                {product.promo ? (
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-success">
                      {product.promo_price} $
                    </h3>

                    <span className="text-danger pt-2 line-through">
                      {product.price} $
                    </span>
                  </div>
                ) : (
                  <h3 className="text-2xl font-bold text-success">
                    {product.price} $
                  </h3>
                )}
                <button className="flex items-center px-5 py-2 gap-3 rounded-xl bg-buttons ">
                  add to cart
                  <MdShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-black mt-10 pb-10">
          <div className="">
            <ul className="w-full flex gap-10 justify-center text-xl">
              <li
                onClick={() => setActiveTab("description")}
                className={`text-xl font-bold pt-3 cursor-pointer ${activeTab === "description" ? "underline decoration-red-500 underline-offset-8" : ""}`}
              >
                Description
              </li>

              <li
                onClick={() => setActiveTab("Characteristics")}
                className={`text-xl font-bold pt-3 cursor-pointer ${activeTab === "Characteristics" ? "underline decoration-red-500 underline-offset-8" : ""}`}
              >
                Characteristics
              </li>

              <li
                onClick={() => setActiveTab("reviews")}
                className={`text-xl font-bold py-3 cursor-pointer ${activeTab === "reviews" ? "underline decoration-red-500 underline-offset-8" : ""}`}
              >
                Reviews
              </li>
            </ul>
          </div>
          {activeTab === "description" && (
            <div className="bg-accent rounded-xl w-full h-fit mt-5 px-20 py-10">
              <h1 className="text-2xl font-bold pb-3">Description</h1>
              <p>{product.description}</p>
            </div>
          )}

          {activeTab === "Characteristics" && (
            <div className="bg-accent rounded-xl w-full h-fit mt-5 px-20 py-10">
              <h1 className="text-2xl font-bold pb-3">Characteristics</h1>
              <table className="w-full">
                <tbody>
                  <tr className="h-16 border-b border-gray-300">
                    <td className="w-2/12">brand </td>
                    <td>Apple</td>
                  </tr>
                  <tr className="h-16 border-b border-gray-300">
                    <td>Model </td>
                    <td>iphone 17 pro</td>
                  </tr>
                  <tr className="h-16 border-b border-gray-300">
                    <td>Memory </td>
                    <td>256GB</td>
                  </tr>
                  <tr className="h-16 border-b border-gray-300">
                    <td>color </td>
                    <td>Orange</td>
                  </tr>
                  <tr className="h-16 border-b border-gray-300">
                    <td>Ram </td>
                    <td>12GB</td>
                  </tr>
                  <tr className="h-16 border-b border-gray-300">
                    <td>Camera </td>
                    <td>12MP , 48MP</td>
                  </tr>
                  <tr className="h-16 border-b border-gray-300">
                    <td>charger </td>
                    <td>20w USB-C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;

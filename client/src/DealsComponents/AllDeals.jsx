import { Link } from "react-router-dom";
import { products, categories } from "../data/DumyData";
import ProductCard from "../reused components/ProductCard";

const AllDeals = () => {
  return (
    <>
      <section className="py-5 md:py-20 xl-py-20 px-5">
        <h1 className="text-2xl font-bold ">Promo Products</h1>
        <h3 className="text-lg py-4 underline">Home / Deal</h3>
        <div className="flex w-full gap-10">
          <div className="w-2/12 hidden min-[700px]:block">
            <h1 className="text-2xl font-bold py-3">Filter</h1>
            <div className="border-b border-t py-3 border-gray-300">
              <h3 className="text-lg font-bold">Filter By price</h3>
            </div>
            <div className="border-b py-3 border-gray-300">
              <h3 className="text-lg font-bold">Filter By category</h3>
              <ul className="pl-5">
                {categories.map((category) => (
                  <li key={category.id}>
                    {" "}
                    <input type="checkbox" /> {category.name}{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-b py-3 border-gray-300">
              <h3 className="text-lg font-bold">Filter By brand</h3>
              <ul className="pl-5">
                {categories.map((category) => (
                  <li key={category.id}>
                    {" "}
                    <input type="checkbox" /> {category.name}{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-b py-3 border-gray-300">
              <h3 className="text-lg font-bold">Filter By color</h3>
              <ul className="pl-5">
                {categories.map((category) => (
                  <li key={category.id}>
                    {" "}
                    <input type="checkbox" /> {category.name}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full md:w-10/12 xl:w-10/12 grid-cols-1">
            <div className="cursor-pointer grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 ">
              {products
                .filter((product) => product.promo > 0)
                .map((product) => (
                  <Link to={`/product/${product.id}`}>
                    <ProductCard key={product.id} products={product} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllDeals;

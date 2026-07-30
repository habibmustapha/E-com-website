import { products, categories } from "../data/DumyData";
import ProductCard from "../reused components/ProductCard";

const AllDeals = () => {
  return (
    <>
      <section className="py-5 md:py-10 xl-py-20 px-5 md:px-10 xl:px-20">
        <h1 className="text-2xl font-bold ">All Products</h1>
        <h3 className="text-lg pb-5">Home/Shop</h3>
        <div className="flex w-full gap-10">
          <div className="w-2/12">
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
          <div className="w-9/12 xl:w-10/12 grid-cols-1">
            <div className=" grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5 md:gap-10 xl:gap-20">
              {products
                .filter((product) => product.promo > 0)
                .map((product) => (
                  <ProductCard key={product.id} products={product} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllDeals;

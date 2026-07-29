import ProductCard from "../reused components/ProductCard";
import { products } from "../data/DumyData";

const ProductSection = () => {
  return (
    <section className="bg-accent py-16 gap-10 xl:gap-20 px-28 ">
      <h1 className="font-black text-2xl pb-5">Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-10 xl:gap-20 ">
        {products
          .filter((product) => product.rating > 4.5)
          .slice(0, 4)
          .map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
      </div>
      <div className="flex pt-10 justify-center">
        <a
          href="/shop"
          className="bg-buttons px-10 py-2 rounded-xl shadow-xl justify-self-center"
        >
          SHOP
        </a>
      </div>
    </section>
  );
};

export default ProductSection;

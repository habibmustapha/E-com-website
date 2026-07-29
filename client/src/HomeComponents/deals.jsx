import { products } from "../data/DumyData";
import ProductCard from "../reused components/ProductCard";

const Deals = () => {
  return (
    <>
      <section className="px-28 pt-5">
        <h1 className="font-bold text-2xl pb-10">Flash Deals</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 xl:gap-20 pb-20">
          {products
            .filter((product) => product.promo > 0)
            .map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Deals;

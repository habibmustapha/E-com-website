import { products } from "../data/DumyData";
import ProductCard from "../reused components/ProductCard";

const Deals = () => {
  return (
    <>
      <section className="bg-background text-text px-5 md:px-20 xl:px-28 pt-5">
        <h1 className="font-bold text-2xl pb-10">Flash Deals</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-5 xl:gap-20 pb-20">
          {products
            .filter((product) => product.promo > 0)
            .map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </div>
        <div className="flex pb-15 justify-center">
          <a
            href="/shop"
            className="bg-buttons px-10 py-2 rounded-xl shadow-xl justify-self-center"
          >
            More Deals
          </a>
        </div>
      </section>
    </>
  );
};

export default Deals;

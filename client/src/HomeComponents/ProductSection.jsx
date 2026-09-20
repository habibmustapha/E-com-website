import ProductCard from "../reused components/ProductCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProductSection = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/products");
        if (!response.ok) {
          throw new Error("failed to fetch");
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <section className="bg-background text-text ">
        <h1>loading ...</h1>
      </section>
    );
  }
  return (
    <section className="bg-background py-16 gap-10 xl:gap-20 px-5 md:px-20 xl:px-28 ">
      <div className="flex justify-between">
        <div>
          <h1 className="font-medium text-buttons text-xl pb-5">
            Trending Products
          </h1>
          <h1 className="font-semibold text-4xl pb-5">Top picks for You </h1>
        </div>

        <div className="h-28 flex text-buttons gap-2 justify-end pb-4 items-end ">
          <div className="flex gap-2 items-center">
            <h1>View all products</h1>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-5 xl:gap-20 cursor-pointer">
        {product
          .filter((p) => p.rating && Number(p.rating) >= 4.5)
          .slice(0, 4)
          .map((p) => (
            <Link key={p.id} to={`/product/${p.id}`}>
              <ProductCard products={p} />
            </Link>
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

import { useState, useEffect } from "react";
import ProductCard from "../reused components/ProductCard";

const Deals = () => {
  const [deal, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/products");

        if (!response.ok) {
          throw new Error("failed to detch");
        }

        const data = await response.json();
        setDeals(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    (fetchDeals(), []);
  });
  if (loading) {
    return (
      <section className="bg-background text-text py-15 md:py-20 px-5">
        <p>Loading deals...</p>
      </section>
    );
  }
  return (
    <>
      <section className="bg-background text-text px-5 md:px-20 xl:px-28 pt-5">
        <h1 className="font-bold text-2xl pb-10">Flash Deals</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-5 xl:gap-20 pb-20">
          {deal
            .filter((product) => product.promo_price)
            .slice(0, 4)
            .map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </div>
        <div className="flex pb-15 justify-center">
          <a
            href="/shop"
            className="relative overflow-hidden bg-linear-to-r from-buttons via-yellow-300 to-buttons px-10 py-2 rounded-xl shadow-xl justify-self-center group"
          >
            <span className="relative">More Deals</span>
            <span
              className="
          shine
          absolute inset-y-0 -right-10 w-8
          bg-white/60
          blur-md
          pointer-events-none
        "
            />
          </a>
        </div>
      </section>
      <section className="grid grid-cols-1 pb-10 justify-center">
        <h1 className="justify-self-center pb-5 text-2xl font-semibold">
          why us ?
        </h1>
        <div className="bg-amber-200  rounded-xl justify-between flex ml-64 mr-64">
          <div className="flex w-1/3 gap-5 justify-center  py-5 border-r-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-package"
            >
              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
              <path d="M12 22V12" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <path d="m7.5 4.27 9 5.15" />
            </svg>
            <div>
              <h1 className="font-[550]">fast delivery</h1>
              <h3>fast & secure delivery methods</h3>
            </div>
          </div>
          <div className="flex w-1/3 gap-5 justify-center border-r-2  py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shield-check"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <div>
              <h1 className="font-[550]">offcial warranty</h1>
              <h3>100% geniune products</h3>
            </div>
          </div>
          <div className="flex w-1/3 gap-5 justify-center  py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-refresh-cw"
            >
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 16H3v5" />
            </svg>
            <div>
              <h1 className="font-[550]">Easy Exchabge</h1>
              <h3>shop with confidance</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deals;

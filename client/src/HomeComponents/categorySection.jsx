import CardCategory from "../reused components/CardCategory";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const CategorySection = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/categories");

        if (!response.ok) {
          throw new Error("failed to fetch");
        }

        const data = await response.json();
        setCategory(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    (fetchCategory(), []);
  });

  if (loading) {
    return (
      <section className="bg-background text-text py-15 md:py-20 px-5">
        <p>Loading categories...</p>
      </section>
    );
  }
  return (
    <>
      <section className="px-5 bg-background text-text md:px-20 xl:px-28 pt-10">
        <div className="flex justify-between">
          <div className="h-28">
            <h1 className=" text-2xl pb-5 text-buttons">Shop By Category</h1>
            <h1 className="text-4xl pb-4 font-semibold">Find what You Need</h1>
          </div>
          <div className="h-28 flex gap-2 justify-end pb-4 items-end ">
            <h1 className="text-buttons justify-self-center p-1">
              view all gategories
            </h1>
            <div className="rounded-full text-buttons p-2 h-fit">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 gap-5 xl:gap-20 items-center pb-20">
          {category.slice(0, 4).map((category) => (
            <CardCategory key={category.id} category={category} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CategorySection;

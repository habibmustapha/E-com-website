import { useState, useEffect } from "react";
import CardCategory from "../reused components/CardCategory";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatgories = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/categories");

        if (!response.ok) {
          throw new Error("failed to fetch");
        }

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("failed ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCatgories();
  }, []);

  if (loading) {
    <section className="bg-background text-text py-15 md:py-20 px-5">
      <p>Loading products...</p>
    </section>;
  }

  return (
    <>
      <section className="bg-background text-text px-5 md:px-10 xl:px-20 py-20 md:py-20 xl:py-40">
        <div className="pb-10">
          <h1 className="text-2xl font-bold">All categories</h1>
          <h3 className="text-lg ">Home / categories</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-5 gap-5 ">
          {categories.map((category) => (
            <CardCategory key={category.id} category={category} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllCategories;

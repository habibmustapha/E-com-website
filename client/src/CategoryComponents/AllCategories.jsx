import { categories } from "../data/DumyData";
import CardCategory from "../reused components/CardCategory";

const AllCategories = () => {
  return (
    <>
      <section className="bg-background text-text px-5 md:px-10 xl:px-20 py-20 md:py-20 xl:py-40">
        <div className="pb-10">
          <h1 className="text-2xl font-bold">All categories</h1>
          <h3 className="text-lg ">Home / categories</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-7 gap-5 ">
          {categories.map((category) => (
            <CardCategory key={category.id} category={category} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllCategories;

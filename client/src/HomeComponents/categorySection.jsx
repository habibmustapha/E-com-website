import CardCategory from "../reused components/CardCategory";
import { categories } from "../data/DumyData";

const CategorySection = () => {
  return (
    <>
      <section className="px-5 xl:px-20 pt-10">
        <h1 className="font-black text-2xl pb-5">CATEGORIES</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-8 gap-5 xl:gap-20 pb-20">
          {categories.slice(0, 5).map((category) => (
            <CardCategory key={category.id} category={category} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CategorySection;

import Hero from "../HomeComponents/hero";
import CategorySection from "../HomeComponents/categorySection";
import ProductSection from "../HomeComponents/productSection";
import Deals from "../HomeComponents/deals";
import Newsletter from "../HomeComponents/newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <ProductSection />
      <Deals />
      <Newsletter />
    </>
  );
};

export default Home;

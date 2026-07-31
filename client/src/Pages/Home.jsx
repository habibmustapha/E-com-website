import Hero from "../HomeComponents/Hero";
import CategorySection from "../HomeComponents/CategorySection";
import ProductSection from "../HomeComponents/ProductSection";
import Deals from "../HomeComponents/Deals";
import Newsletter from "../HomeComponents/Newsletter";
import LogoBanner from "../HomeComponents/LogoBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <ProductSection />
      <Deals />
      <Newsletter />
      <LogoBanner />
    </>
  );
};

export default Home;

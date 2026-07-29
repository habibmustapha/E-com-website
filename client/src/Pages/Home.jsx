import Header from "../HomeComponents/header";
import Hero from "../HomeComponents/hero";
import Navbar from "../HomeComponents/navbar";
import CategorySection from "../HomeComponents/categorySection";
import ProductSection from "../HomeComponents/ProductSection";
import Footer from "../HomeComponents/footer";
import Deals from "../HomeComponents/deals";
import Newsletter from "../HomeComponents/newsletter";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <CategorySection />
      <ProductSection />
      <Deals />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

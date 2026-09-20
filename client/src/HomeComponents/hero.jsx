import ImageSlider from "../reused components/ImageSlider";
import heroIphone from "../assets/hero_iphone.jpg";
import exclusive from "../assets/hero_2.png";

const Hero = () => {
  const slides = [
    { url: heroIphone, title: "Iphone" },
    { url: exclusive, title: "macbook" },
  ];

  return (
    <>
      <section className="mt-40 h-110 px-12 rounded-2xl shadow-xl 2xl:h-125">
        <ImageSlider slides={slides} />
      </section>
    </>
  );
};

export default Hero;

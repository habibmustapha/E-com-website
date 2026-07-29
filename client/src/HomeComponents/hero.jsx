import ImageSlider from "../reused components/ImageSlider";
import heroIphone from "../assets/hero_iphone.jpg";
import exclusive from "../assets/hero_2.png";

const Hero = () => {
  const slides = [
    { url: heroIphone, title: "Iphone" },
    { url: exclusive, title: "macbook" },
  ];

  const sliderStyle = {};

  return (
    <>
      <section
        style={sliderStyle}
        className=" bg-linear-to-r from-yellow-500 to-yellow-200 h-96 shadow-xl 2xl:h-125"
      >
        <ImageSlider slides={slides} />
      </section>
    </>
  );
};

export default Hero;

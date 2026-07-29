import ImageSlider from "../reused components/ImageSlider";
import heroIphone from "../assets/hero_iphone.jpg";
import heroMacbook from "../assets/hero_macbook.jpg";

const Hero = () => {
  const slides = [
    { url: heroIphone, title: "Iphone" },
    { url: heroMacbook, title: "macbook" },
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

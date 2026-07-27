import ImageSlider from "../reused components/ImageSlider";
import heroIphone from "../assets/hero_iphone.jpg";
import heroMacbook from "../assets/hero_macbook.jpg";

const Hero = () => {
  const slides = [
    { url: heroIphone, title: "Iphone" },
    { url: heroMacbook, title: "macbook" },
  ];

  const sliderStyle = {
    margin: "0 40px",
    borderRadius: "20px",
  };

  return (
    <>
      <section style={sliderStyle} className="h-56 shadow-xl 2xl:h-125">
        <ImageSlider slides={slides} />
      </section>
    </>
  );
};

export default Hero;

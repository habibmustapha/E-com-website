import ImageSlider from "../reused components/ImageSlider";
import heroIphone from "../assets/hero_iphone.jpg";
import heroMacbook from "../assets/hero_macbook.jpg";

const Hero = () => {
  const slides = [
    { url: heroIphone, title: "Iphone" },
    { url: heroMacbook, title: "macbook" },
  ];

  const sliderStyle = {
    width: "95%",
    height: "300px",
    margin: "0 40px",
    borderRadius: "20px",
  };

  return (
    <>
      <section style={sliderStyle}>
        <ImageSlider slides={slides} />
      </section>
    </>
  );
};

export default Hero;

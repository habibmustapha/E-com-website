import { useState, useEffect } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const sliderStyles = {
    width: "100%",
    position: "relative",
    height: "100%",
    backgroundSize: "cover",
  };
  const slidesStyle = {
    width: "100%",
    marginTop: "20px",
    borderRadius: "20px",
    height: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const goToslide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div style={sliderStyles}>
      <div style={slidesStyle}></div>
      <div className="flex gap-5 text-4xl justify-center cursor-pointer text-yellow-500">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToslide(slideIndex)}>
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

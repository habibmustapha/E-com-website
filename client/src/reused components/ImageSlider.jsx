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
    backgroundSize: "contain",
  };

  const goToslide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div style={sliderStyles}>
      <div className="mt-5 h-full">
        <img
          src={slides[currentIndex].url}
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
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

import React, { useState, useEffect } from "react";

import AppButton from "./AppButton";
import "../styles/HeroCarosel.css";

function HeroCarosel() {
  const slides = [
    "Enhance fortune 50 company’s insights teams research capabilities",
    "Maximize top-tier corporation's insights division's research efficacy",
    "Boost multinational conglomerate's analysis unit's exploration potential",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
    }, 3000); // Change slides every 3 seconds

    return () => clearTimeout(timer);
}, [currentSlide]);

  return (
    <div className="herocarouseldiv">
      <p>{slides[currentSlide]}</p>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : "inactive"}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      <AppButton onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)} idname="black" bgcolor="black" color="white">
        Explore More
        <svg id ="carouselsvg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1716 6.9999L-5.92571e-07 6.9999L-7.67416e-07 8.9999L12.1716 8.9999L6.8076 14.3638L8.2218 15.778L16 7.9999L8.2218 0.221679L6.8076 1.63589L12.1716 6.9999Z" fill="white"/>
</svg>

      </AppButton>
    </div>
  );
}

export default HeroCarosel;

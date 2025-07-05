import React, { useState, useEffect, useRef } from "react";

function Slider({ city }) {
  if (!city) return <div className="text-center py-10">Loading slider...</div>;

  const cityName = city.toLowerCase();
  const images = [1, 2, 3, 4, 5].map(
    (i) => `/city_image/${cityName}/slider${i}.jpg`
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => resetTimeout();
  }, [currentIndex]);

  const handleManualSlide = (index) => {
    resetTimeout();
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden h-[550px]">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="min-w-full h-[550px] relative">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay City Name - Bottom Right */}
            {/* City Name Label - Bottom Right Creative Text */}
              <div className="absolute top-10 left-6 z-10 justify-center">
                <h2 className="text-white text-5xl sm:text-6xl font-alfafont animate-fade-in drop-shadow-xl">
                Welcome to {city}
              </h2>


              </div>

          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;

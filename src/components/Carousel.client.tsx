import React, { useState } from "react";

interface Activity {
    title: string;
    description: string;
    image: string | string[];
  }

function ImageRow({ activity }: { activity: Activity }) {
  const images = Array.isArray(activity.image) ? activity.image : [activity.image];
  const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide

  const selectSlide = (index: number) => {
    setActiveSlide(index); // Function to set active slide
  };

  return (
    <div className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((imgSrc, index) => (
          <div key={index} className={`duration-700 ease-in-out ${index === activeSlide ? 'block' : 'hidden'}`} data-carousel-item>
            <img src={imgSrc} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Carousel image ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Updated slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-gray-400'}`} // Highlight the active indicator
            aria-current={index === activeSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => selectSlide(index)} // Set the selected slide as active when clicked
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ImageRow;

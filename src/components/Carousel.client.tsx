'use client'
interface Activity {
  title: string;
  description: string;
  image: string | string[];
}

interface CarouselProps {
  activity: Activity;
  imageSizeClass: string; // New prop for image size
}

import React, { useState, useEffect, useRef } from "react";

function Carousel({ activity, imageSizeClass }: CarouselProps) {
  const images = Array.isArray(activity.image) ? activity.image : [activity.image];
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Function to set active slide
  const selectSlide = (index: number) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const imgElements = carousel.getElementsByTagName('img');
      const adjustHeight = () => {
        let maxHeight = 0;
        const imgs = Array.from(imgElements);
        for (let img of imgs) {
          if (img.offsetHeight > maxHeight) maxHeight = img.offsetHeight;
        }
        carousel.style.height = `${maxHeight}px`;
      };

      const imgsArray = Array.from(imgElements);
      imgsArray.forEach((img) => {
        if (img.complete) {
          adjustHeight();
        } else {
          img.onload = adjustHeight;
        }
      });
    }
  }, [images]);

  // Automatically transition to the next slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevActiveSlide) => (prevActiveSlide + 1) % images.length);
    }, 4000); // Change slide every 2000 milliseconds

    // Clear interval when component unmounts or images change
    return () => clearInterval(interval);
  }, [images]);
  
  

  return (
    <div ref={carouselRef} className="relative w-full overflow-hidden" data-carousel="slide">
      {images.map((imgSrc, index) => (
        <div key={index} className={`absolute w-full transition-opacity duration-700 ease-in-out ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}>
          <img src={imgSrc} className={`${imageSizeClass} object-contain`} alt={`Carousel image ${index + 1}`} />
        </div>
      ))}
      <div className="absolute z-30 flex w-full bottom-0 pb-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-5 h-5 rounded-full mx-1 ${index === activeSlide ? 'bg-white' : 'bg-gray-400'}`}
            aria-current={index === activeSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => selectSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

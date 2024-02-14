'use client'

import Image from "next/image";

import itinerary from '../data/itinerary'


interface Activity {
  title: string;
  description: string;
  image: string | string[];
}

import React, { useState, useEffect, useRef } from "react";

function Carousel({ activity }: { activity: Activity }) {
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
          <img src={imgSrc} className="md:w-1/4 w-1/2 object-contain" alt={`Carousel image ${index + 1}`} />
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








export default function Home() {
  // State to track elements that are in view
  const [inView, setInView] = useState<number[]>([]);


  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.fade-in').forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          // Add index of element to 'inView' state if it's in the viewport
          if (!inView.includes(index)) {
            setInView([...inView, index]);
          }
        }
      });
    };

    // Register the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check to see if any elements are in view on load
    handleScroll();

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView]); // Dependency array includes 'inView' to update the listener when the state changes

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between md:p-24 p-1">
      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

      {/* Your content here, wrapped in divs with 'fade-in' class */}
      <div className="hero-container w-[100%]">
        <div className="relative md:h-[500px] w-full overflow-hidden">
          {/* Adjust the width and height as per your requirement */}
          <Image
            src="/thailand.jpg" // The path to your image
            width={3000} // Add a width
            height={500} // Add a height
            alt="Hero Image"
            priority // This prop is optional, it's good for above-the-fold images
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay if needed */}
          <h1 className="absolute top-1/2 text-center w-[100%] text-white md:text-6xl  text-4xl font-bold">
            Klaven Family Trip to Thailand
          </h1>
        </div>
      </div>

      {/* Itinerary */}
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {itinerary.map((day, index) => (
            <li className="mb-10 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{day.day}</time>
              {day.activities.map((activity, activityIndex) => (
                <div key={activityIndex}>
                  <h3 className="text-lg mt-7 font-semibold text-gray-900 dark:text-white">{activity.title}</h3>
                  <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{activity.description}</p>
                  <Carousel activity={activity} />
                </div>
              ))}
            </li>
          ))}
      </ol>
    </main>
  );
}

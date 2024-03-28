'use client'

import Image from "next/image";

import itinerary from '../data/itinerary'


import Carousel from "../components/Carousel.client"

import ThailandNews from "./thailand_news";




export default function Home() {

  

 
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
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {itinerary.map((day, index) => (
          <li className="mb-10 ml-4" key={index}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{day.day}</time>
            {day.activities.map((activity, activityIndex) => (
              <div key={activityIndex}>
                <h3 className="text-lg mt-7 font-semibold text-gray-900 dark:text-white">{activity.title}</h3>
                <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{activity.description}</p>
                {/* Make sure the Carousel is receiving the activity in the expected format */}
                <Carousel activity={activity} imageSizeClass="md:w-1/4 w-1/2" /> {/* Add the imageSizeClass prop if needed */}
              </div>
            ))}
          </li>
        ))}
      </ol>
      
      {/* <ThailandNews /> */}
    </main>
  );
}

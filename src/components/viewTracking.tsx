'use client'
import { useEffect, useState } from 'react';
 function viewTracking() {
   
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

 }

 export default viewTracking;
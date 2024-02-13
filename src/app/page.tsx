import Image from "next/image";

interface Activity {
  title: string;
  description: string;
  image: string | string[];
}

function ImageRow({ activity }: { activity: Activity }) {
  // If activity.image is an array, map over it and display all images
  // If it's a string, display it as a single image
  const images = Array.isArray(activity.image) ? activity.image : [activity.image];

  return (
    <div className="flex space-x-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image || '/default.avif'}
          alt={`Image ${index + 1}`}
          className="rounded-2xl h-auto object-cover w-1/4"
        />
      ))}
    </div>
  );
}

const itinerary = [{
  day: "June 15th, 2024",
  activities: [
    {
      title: "Departure from Tel Aviv to Bangkok",
      description: "Departure on EL AL LY 81 at 11:45 PM, arriving the next day at 3:00 PM.",
      image: "/elal.webp"
    }
  ]
}, {
  day: "June 16th, 2024",
  activities: [
    {
      title: "Arrival in Bangkok",
      description: "3:00PM Arrival at Bangkok's Suvarnabhumi Airport followed by a private transfer to your hotel.",
      image: "/arrival.webp"
    },
    {
      title: "Dinner in Chinatown",
      description: "Enjoy a delicious dinner in Bangkok's vibrant Chinatown, known for its street food and lively atmosphere.",
      image: "/chinatown.jpeg"
    },

  ]
}, {
  day: "June 17th, 2024: Private Driver for the day",
  activities: [
    {
      title: "Damnoen Saduak Floating Market",
      description: "Start with a visit to Damnoen Saduak Floating Market, known for its vibrant atmosphere and colorful vendors.",
      image: "/damnoen-saduak-floating.jpeg"
    },
    {
      title: "Mae Klong Railway Market",
      description: "Explore Mae Klong, famous for its railway market where vendors quickly retract their awnings and goods every time a train passes through.",
      image: "/rail.webp"
    },
    {
      title: "Anniversary Dinner at Saneh Jaan",
      description: "Conclude the day with a special anniversary dinner at Saneh Jaan, known for its traditional Thai cuisine.",
      image: "/saan.jpeg"
    }
  ]
}, {
  day: "June 18th, 2024: Private Driver for the day",
  activities: [
    {
      title: "The Grand Palace",
      description: "Morning visit to The Grand Palace, the official residence of the Kings of Siam.",
      image: "/grand.jpeg"
    },
    {
      title: "Wat Pho",
      description: "Explore Wat Phra Chetuphon, known for its giant reclining Buddha.",
      image: "/watpho.jpeg"
    },
    {
      title: "Wat Traimit",
      description: "Visit Wat Traimit, the Temple of the Golden Buddha.",
      image: "/traimit.jpeg"
    },
    {
      title: "Thanon Khao San",
      description: "Conclude the day with a stroll through Thanon Khao San, known as the backpacker's haven.",
      image: "/khaosan-road.webp"
    }
  ]
}, {
  day: "June 19th, 2024",
  activities: [
    {
      title: "Travel to Chiang Mai",
      description: "Catch a flight from Bangkok to Chiang Mai with AirAsia, departing at 11:25 AM and arriving at 12:40 PM. Check into the U Chiang Mai Hotel upon arrival.",
      image: ["/takeoff.webp", "/uchiang.jpeg"] 
    },
    
    {
      title: "Wat Chedi Luang",
      description: "Visit Wat Chedi Luang, known for its ancient ruins and towering stupa.",
      image: ["/WatChediLuang.jpeg"] 
    },
    {
      title: "Neng Earthen Jar Roast Pork",
      description: "Enjoy a delicious lunch at Neng Earthen Jar Roast Pork, known for its local cuisine.",
      image: ["/Neng-Earthen-Jar-Roast-Pork-4.jpeg"] 
    },

    {
      title: "Visit the Chiang Mai Night Bazaar",
      description: "Explore the vibrant Chiang Mai Night Bazaar, known for its local crafts, food, and entertainment.",
      image: ["/chiangMaiNight.webp"] 
    }
  ]
}, {
  day: "June 20th, 2024",
  activities: [
    {
      title: "Maerim Elephant Sanctuary",
      description: "Half-day morning visit to Maerim Elephant Sanctuary for an intimate experience with elephants.",
      image: ["/elephants.jpeg", "/maerim2.webp", "/maerim3.jpeg"]
    },
    {
      title: "Huen Phen",
      description: "Enjoy a traditional Northern Thai lunch at Huen Phen, known for its authentic cuisine.",
      image: ["/huen-phen.jpg"]
    },
    {
      title: "Chang Phueak Pork Leg Rice",
      description: "Savor a delicious dinner at Chang Phueak Pork Leg Rice, known for its local specialties.",
      image: ["/Khao-Kha-Moo.jpg"]
    },
    {
      title: "Chiang Mai Cabaret Show",
      description: "Enjoy an evening at the Chiang Mai Cabaret Show, featuring colorful performances and entertainment.",
      image: ["/caberet.jpeg"]
    }
  ]
}, {
  day: "June 21st, 2024",
  activities: [
    {
      title: "Chom Cafe & Restaurant",
      description: "Enjoy a leisurely breakfast at Chom Cafe & Restaurant, known for its scenic views and delicious cuisine.",
      image: ["/chom.jpeg", "/chom2.jpeg"]
    },
    {
      title: "Flight to Krabi",
      description: "Depart from Chiang Mai to Krabi with AirAsia, taking off at 4:25 PM and landing at 6:25 PM. Check into the Holiday Ao Nang Beach Resort Krabi upon arrival.",
      image: ["/takeoff2.webp", "/krabihotel.jpeg"]
    },
    {
      title: "Lae Lay Grill",
      description: "Enjoy a memorable dinner at Lae Lay Grill, known for its stunning views and fresh seafood.",
      image: ["/LaeLay.jpeg"]
    }
  ]
}, {
  day: "June 22nd, 2024",
  activities: [
    {
      title: "Phi Phi Islands",
      description: "Visit the breathtaking Phi Phi Islands for swimming, snorkeling, and enjoying the landscapes.",
      image: ["/Koh-Phi-Phi.jpg", "/phiphi.jpg"]
    },
    {
      title: "Wat Tham Seua (Tiger Cave Temple)",
      description: "Explore the spiritual site of Wat Tham Seua, set amidst lush jungle.",
      image: "/tigercave.jpeg"
    }, 
    {
      title: "Krabi Town Night Market",
      description: "Conclude the day with a visit to the Krabi Town Night Market, known for its local food and vibrant atmosphere.",
      image: "/krabi-town-market.jpg"
    }
  ]
}, {
  day: "June 23rd, 2024",
  activities: [
    {
      title: "Krabi 4 Island Adventure",
      description: "Embark on the Krabi 4 Island Adventure tour, visiting Ko Kai (Chicken Island), Ko Poda, Phra Nang Cave Beach, and the Tub Islands.",
      image: ["/chicken.jpeg", "/kopoda.jpeg", "/tubislands.jpeg"]
    },
    {
      title: "Ao Nang Night Market",
      description: "Explore the vibrant Ao Nang Night Market, known for its local food and lively atmosphere.",
      image: ["/AoNangNight.webp"]
    }
  ]
}, {
  day: "June 24th, 2024 : Private Transfer to Phuket",
  activities: [
    {
      title: "Travel to Phuket",
      description: "Transition from Krabi to Phuket and check into the Phuket Marriott Resort & Spa Merlin Beach.",
      image: "/merlin.avif"
    }
  ]
}, {
  day: "June 25th, 2024",
  activities: [
    {
      title: "ATV Tour in Phuket",
      description: "Embark on a 1.5-hour ATV tour through Phuket's landscapes, including a visit to the Big Buddha.",
      image: ["/atv.jpeg", "/big-buddha.jpeg"]
    }
  ]
}, {
  day: "June 26th, 2024",
  activities: [
    {
      title: "Flying Hanuman Zipline",
      description: "Experience the thrill of ziplining at Flying Hanuman, exploring Phuket's jungle canopy.",
      image: ["/flyinghanuman.jpeg", "/flying2.avif", "/flying3.jpeg"]
    },
    {
      title: "Carnival Magic",
      description: "Visit Carnival Magic for a colorful and lively entertainment experience.",
      image: ["/carnival.jpeg", "/carnival2.jpeg"]
    },
    {
      title: "Bangla Road Nightlife",
      description: "Explore the vibrant nightlife of Bangla Road, with its bustling bars and street performances.",
      image: ["/bangla.jpeg", "/bangla2.avif"]
    }
  ]
}, {
  day: "June 27th, 2024",
  activities: [
    {
      title: "James Bond Island Tour",
      description: "Enjoy the James Bond Island tour, including visits to the renowned James Bond Island, Hong Island, and Panyee Island.",
      image: ["/jamesbond.jpeg", "/hongisland.jpeg", "/panyee.jpeg"]
    }
  ]
}, {
  day: "June 28th, 2024",
  activities: [ 
    {
      title: "Old Phuket Town",
      description: "Explore Old Phuket Town, known for its Sino-Portuguese architecture and vibrant streets.",
      image: "/oldPhuket.jpeg"
    }
  ]
}, {
  day: "June 29th, 2024",
  activities: [ 
    {
      title: "Return to Bangkok",
      description: "Depart from Phuket to Bangkok via AirAsia, leaving Phuket at 1:25 PM and arriving in Bangkok at 2:55 PM. Check into the InterContinental Bangkok, an IHG Hotel.",
      image: "/intercont.webp"
    },
    {
      title: "Dinner at Raan Jay Fai",
      description: "Conclude the trip with a memorable dinner at Raan Jay Fai, a Michelin-starred street food restaurant.",
      image: "/raan.jpeg"
    }
  ]
}, {
  day: "June 30th, 2024",
  activities: [
    {
      title: "Back To Israel",
      description: "Prepare for departure, reflecting on the incredible experiences in Thailand. Flight departs from Bangkok to Tel Aviv, concluding the memorable trip.",
      image: "/leaving.webp"
    }
  ]
}]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="hero-container w-[100%]">
        <div className="relative h-[500px] w-full overflow-hidden">
          {/* Adjust the width and height as per your requirement */}
          <Image
            src="/thailand.jpg" // The path to your image
            width={3000} // Add a width
            height={500} // Add a height
            alt="Hero Image"
            priority // This prop is optional, it's good for above-the-fold images
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay if needed */}
          <h1 className="absolute top-1/2 text-center w-[100%] text-white text-4xl font-bold">
            Klaven Family Trip to Thailand
          </h1>
        </div>
      </div>
        
        {/* <!-- Itinerary --> */}
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {itinerary.map((day, index) => (
            <li className="mb-10 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{day.day}</time>
              {day.activities.map((activity, activityIndex) => (
                <div key={activityIndex}>
                  <h3 className="text-lg mt-7 font-semibold text-gray-900 dark:text-white">{activity.title}</h3>
                  <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{activity.description}</p>
                  <ImageRow activity={activity} />
                </div>
              ))}
            </li>
          ))}
        </ol>
    </main>
    );  
  }

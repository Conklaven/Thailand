const links = {
    "Sindhorn Midtown Hotel Bangkok": "https://www.sindhornmidtown.com/",
    "U Chiang Mai Hotel": "https://www.uhotelsresorts.com/uchiangmai/",
    "Holiday Ao Nang Beach Resort Krabi" : "https://holidayresortkrabi.com/",
    "Phuket Marriott Resort & Spa Merlin Beach": "https://www.marriott.com/hotels/travel/hktmb-phuket-marriott-resort-and-spa-merlin-beach/",
    "InterContinental Bangkok, an IHG Hotel": "https://www.ihg.com/intercontinental/hotels/us/en/bangkok/bkkhb/hoteldetail"
    
}

const itinerary = [{
        day: "June 15th, 2024",
        desc: "Departure Day",
        activities: [
          {
            title: "Cab to Ben Gurion Airport",
            time: "8:00 PM",
            description: "Hadar Taxi service pre-arranged but not paid to take you to the airport.",
          },
          {
            title: "Relax in the Dan Lounge before Departing from Tel Aviv to Bangkok",
            time: "11:45 PM",
            description: "Departure on EL AL LY 81",
            image: "/elal.webp"
          }
        ]
      }, {
        day: "June 16th, 2024",
        desc: "Arrival Day",
        hotel: "Sindhorn Midtown Hotel Bangkok",
        hotel_link: links["Sindhorn Midtown Hotel Bangkok"],
        activities: [
          {
            title: "Arrival in Bangkok",
            time: "3:00 PM",
            description: "Arrive at Bangkok's Suvarnabhumi Airport followed by a private transfer to your hotel.",
            image: ["/arrival.webp", "/PHOTO-2023-12-28-20-53-50.jpg", "/PHOTO-2023-12-28-21-06-16.jpg", "/PHOTO-2023-12-28-21-06-28.jpg"]
            
          },
          {
            title: "visit 7-11 by the hotel",
            time: "4:30 PM",
            description: "Visit the iconic 7-11 convenience store to experience the local culture and pick up some snacks, bug spray, and other essentials.",
          },
          {
            title: "Shopping at mall",
            description: "Time dependent either visit Platinum Fashion Mall cheap local clothes open till 8pm or MBK Center for knock off brand names open till 10pm",
          },
          {
            title: "Pratunam Night Market",
            description: "Explore the vibrant Pratunam Night Market, known for its street food and local crafts.",
          },

          {
            title: "Jodd Fairs Night Market",
            description: "Explore the vibrant Jodd Fairs Night Market, known for its street food and local crafts.",
            image: ['IMG_2006.JPG']  

          }
        ]
      }, {
        day: "June 17th, 2024",
        desc: "Exploring Bangkok with Private Driver",
        hotel: "Sindhorn Midtown Hotel Bangkok",
        hotel_link: links["Sindhorn Midtown Hotel Bangkok"],
        activities: [
          {
            title: "Tha Kha Floating Market",
            time: "9:00 AM - 11:00 AM",
            description: "Visit Tha Kha Floating Market, known for its traditional canal-side market and local produce.",
            image: ["thakah1.jpeg", "/thakha2.webp", "/thakha3.webp"]
          },
          {
            title: "Mae Klong Railway Market",
            time: "12:00 PM - 1:00 PM",
            description: "Explore Mae Klong, famous for its railway market where vendors quickly retract their awnings and goods every time a train passes through.",
            image: ["/rail.webp", "/klong2.jpeg", "/klong3.jpeg", "/klong4.jpeg"]
          },
          {
            title: "Additional Shopping time",
            time: "2:00 PM - 6:00 PM",
            description: "Enjoy additional shopping time at local markets or malls.",
          },
          {
            title: "Dinner and shopping in Chinatown Night Market",
            description: "Enjoy a delicious dinner in Bangkok's vibrant Chinatown, known for its street food and lively atmosphere.",
            image: "/chinatown.jpeg"
          },

        ]
      }, {
        day: "June 18th, 2024",
        desc: "Exploring Bangkok's Temples and Culinary Delights with Private Driver",
        hotel: "Sindhorn Midtown Hotel Bangkok",
        hotel_link: links["Sindhorn Midtown Hotel Bangkok"],
        activities: [
          {
            title: "The Grand Palace",
            time: "10:00 AM",
            description: "Morning visit to The Grand Palace, the official residence of the Kings of Siam.",
            image: ["/grand.jpeg", "/grand.webp"]
          },
          {
            title: "Lunch nearby",
            description: "Enjoy a traditional Thai lunch at a local restaurant. Rongoos?",
          },
          {
            title: "Wat Phra",
            time: "1:00 PM",
            description: "Explore Wat Phra Chetuphon, known for its giant reclining Buddha.",
            image: ["/watpho.jpeg", "/whatpho2.jpeg"] 
          },

          {
            title: "Ferry Ride on the Chao Phraya River to Wat Arun",
            description: "Take a ferry ride on the Chao Phraya River to Wat Arun, the Temple of Dawn.",

          },
          { title: "Wat Arun",
            time: "2:30 PM",
            description: "Visit Wat Arun, the Temple of Dawn, known for its stunning riverside views.",
            image: ['/IMG_2012.JPG', '/IMG_2013.JPG', '/IMG_2014.WEBP']
          },
          {
            title: "Thanon Khao San",
            time: "4:00 PM- 6:00 PM",
            description: "Conclude the day with a stroll through Thanon Khao San, known as the backpacker's haven shopping and more",
            image: ["/khaosan-road.webp", "/kha.jpeg"]
          },
          {
            title: "Dinner for Kids and Barry at Polo Fried Chicken Michelin Restaurant",
            description: "Enjoy a delicious dinner at Polo Fried Chicken, a Michelin Recognized restaurant known for its crispy fried chicken.",
          },
          {
            title: "Anniversary Dinner at Saneh Jaan a 1 Star Michelin Restaurant",
            time: "7:00PM",
            description: "Conclude the day with a special anniversary dinner at Saneh Jaan, a known for its authentic Thai cuisine.",
            image: ["/saneh1.jpeg", "/saneh2.jpeg", "/saneh3.png", "/saneh4.png"]
          }

        ]
      }, {
        day: "June 19th, 2024",
        desc: "Travel Day",
        hotel: "U Chiang Mai Hotel",
        hotel_link: links["U Chiang Mai Hotel"],
        activities: [
          {
            title: "Travel to Chiang Mai",
            time: "11:25 AM - 12:40 PM",
            description: "Relax at the Miracle Lounge in DMK before Catching Air Asia flight 3447 from Bangkok to Chiang Mai, Check into the U Chiang Mai Hotel upon arrival.",
            image: ["/takeoff.webp", "/uchiang.jpeg"] 
          },
          {
            title: "Bolt to the U Chiang Mai Hotel",
            time: "2:00 PM",
            description: "Take a taxi to the hotel and check in",
          },
          {
            title: "Huen Phen",
            time: "3:00 PM",
            description: "Enjoy a traditional Northern Thai lunch at Huen Phen, known for its authentic cuisine.",
            image: ["/huen-phen.jpg", "/phen2.jpeg", "/phen3.jpeg"]
          },
          { title: "Wat Phan On",
            time: "3:30 PM",
            description: "Visit Wat Phan On, a beautiful temple in the heart of Chiang Mai.",
            image: ['/IMG_2025.JPG']
          },

          { 
            title: "Khao Soi Lung Prakit Kad Kom",
            time: "closes at 4:30pm",
            description: " Kha Soi Lung Prakit Kad Kom, a Michelin Recognized restuarant.",
            image: ["/Khao Soi 1.webp"]
          },
          {
            title: "Visit the Chiang Mai Night Bazaar",
            time: "6:00 PM",
            description: "Explore the vibrant Chiang Mai Night Bazaar, known for its local crafts, food, and entertainment.",
            image: ["/chiangMaiNight.webp", "/night2.jpeg", "/night3.jpeg", "/night4.jpeg"] 
          },

          {
            title: "Chang Phueak Pork Leg Rice",
            time : "9:00 PM",
            description: "Savor a delicious late night snack at Chang Phueak Pork Leg Rice, known for its local specialties.",
            image: ["/Khao-Kha-Moo.jpg", "/leg2.jpeg", "/leg3.jpeg", "/leg4.jpeg"]
          },

        ]
      }, {
        day: "June 20th, 2024",
        desc: "Chiang Mai Elephant Sanctuary and Evening Entertainment",
        hotel: "U Chiang Mai Hotel",
        hotel_link: links["U Chiang Mai Hotel"],
        activities: [
          {
            title: "Maerim Elephant Sanctuary *",
            time: "7:00AM - 2:00PM",
            description: "Experience the joy of connecting with elephants as you don traditional mahout attire, engage in playful interactions, and participate in mud spas and bathing sessions. Culminate your adventure by mastering the art of traditional noodle soup creation and unwinding by the pool.",
            image: ["/elephants.jpeg", "/maerim2.webp", "/maerim3.jpeg"]
          },


          {
            title: "Neng Earthen Jar Roast Pork",
            time: "6:00 PM",
            description: "Enjoy a delicious dinner at Neng Earthen Jar Roast Pork, known for its local cuisine.",
            image: ["/Neng-Earthen-Jar-Roast-Pork-4.jpeg", "/pork2.jpeg", "/pork1.jpeg", "/pork4.jpeg"] 
          },
          // {
          //   title: "Sapun Fried Chicken",
          //   description: "Savor a delicious lunch at Sapun Fried Chicken, a local favorite.",
          //   image: ["/sapun.jpeg"]
          // },
        ]
      }, {
        day: "June 21st, 2024",
        desc: "Chiang Mai to Krabi",
        hotel: "Holiday Ao Nang Beach Resort Krabi",
        hotel_link: links["Holiday Ao Nang Beach Resort Krabi"],
        activities: [

          { 
            title: "Wat Phra That Doi Suthep",
            time: "9:00 AM",
            description: "Explore Wat Phra That Doi Suthep, a sacred temple atop Doi Suthep mountain.",
            image: ['/IMG_2026.JPG', '/IMG_2027.JPG']
          },
          {
            title: "Sapun Fried Chicken",
            description: "Savor a delicious lunch at Sapun Fried Chicken, a local favorite.",
            image: ["/sapun.jpeg"]
          },

          {
            title: "Wat Chedi Luang",
            description: "Visit Wat Chedi Luang, known for its ancient ruins and towering stupa.",
            image: ["/WatChediLuang.jpeg","/Chedi2.jpeg", "/Chedi4.jpeg"] 
          },
          // {
          //   title: "Wat Phra Singh",
          //   description: "Explore Wat Phra Singh, a beautiful temple in the heart of Chiang Mai.",
          //   image: ["/singh.jpeg", "/singh2.png"]
          // },

 
          {
            title: "Bolt to the Chiang Mai Airport",
            time: "1:30 PM",
            description: "Take a taxi to the airport and check in for your flight to Krabi.",
          },
          {
            title: "Flight to Krabi",
            time: "4:25 PM - 6:25 PM",
            description: "Relax in the Thai Airways Royal Orchid lounge before Departing from Chiang Mai to Krabi on AirAsia 3074, Check into the Holiday Ao Nang Beach Resort Krabi upon arrival.",
            image: ["/takeoff2.webp", "/krabihotel.jpeg"]
          },
          {
            title: "Dinner",
            description: "Explore local dining options in Krabi.",

          }
        ]
      }, {
        day: "June 22nd, 2024",
        desc: "Exploring Krabi",
        hotel: "Holiday Ao Nang Beach Resort Krabi",
        hotel_link: links["Holiday Ao Nang Beach Resort Krabi"],
        activities: [
          {
            title: "Phi Phi Islands",
            description: "Visit the breathtaking Phi Phi Islands for swimming, snorkeling, and enjoying the landscapes. Need to book",
            image: ["/Koh-Phi-Phi.jpg", "/phiphi.jpg"]
          },
          {
            title: "Wat Tham Seua (Tiger Cave Temple)",
            description: "Explore the spiritual site of Wat Tham Seua, set amidst lush jungle.",
            image: ["/tigercave.jpeg", "/tiger2.jpeg", "/tiger3.jpeg", "/tiger4.jpeg"]
          }, 
          {
            title: "Krabi Town Night Market",
            description: "Conclude the day with a visit to the Krabi Town Night Market, known for its local food and vibrant atmosphere.",
            image: ["/krabi-town-market.jpg", "/krabinight2.png", "/krabinight3.jpeg"]
          }
        ]
      }, {
        day: "June 23rd, 2024",
        desc: "Krabi Adventures",
        hotel: "Holiday Ao Nang Beach Resort Krabi",
        hotel_link: links["Holiday Ao Nang Beach Resort Krabi"],
        activities: [
          {
            title: "Krabi 4 Island Adventure *",
            time: "8:00AM - 2:00PM",
            description: "Embark on the Krabi 4 Island Adventure tour, visiting Ko Kai (Chicken Island), Ko Poda, Phra Nang Cave Beach, and the Tub Islands.",
            image: ["/chicken.jpeg", "/kopoda.jpeg", "/tubislands.jpeg", "/cavebeach.jpeg"]
          },
          {
            title: "Ao Nang Night Market",
            description: "Explore the vibrant Ao Nang Night Market, known for its local food and lively atmosphere.",
            image: ["/AoNangNight.webp","/aonang2.jpeg", "/aonang3.jpeg", "/aonang4.webp"]
          }
        ]
      }, {
        day: "June 24th, 2024",
        desc: "Last Day in Krabi and Travel to Phuket",
        hotel: "Phuket Marriott Resort & Spa Merlin Beach",
        activities: [
          { title: "Visit Maya Bay",
            description: "Visit the iconic Maya Bay, known for its stunning turquoise waters and lush cliffs.",
            image: ["/maya.webp", "/maya2.jpeg", "/maya3.jpeg", "/maya4.webp"]
          },
          {
            title: "Travel to Phuket",
            description: "Transition from Krabi to Phuket and check into the Phuket Marriott Resort & Spa Merlin Beach.",

          },
          {
            title: "Relax at the Hotel",
            description: "Spend the afternoon relaxing at the hotel, enjoying the beach and amenities.",
            image: ["/merlin.avif", "/merlin2.jpeg", "/merlin3.jpeg", "/merlin4.jpeg"]
          },
          {
            title: "Dinner at Resort",
            description: "Asian Buffet Dinner at the Resort",
            link: 'https://drive.google.com/file/d/1_-RJaBcvPM_MJLwvGhi-Y0KgmD9fOm5H/view'
          }
        ]
      }, {
        day: "June 25th, 2024",
        desc: "Phuket Adventures",
        hotel: "Phuket Marriott Resort & Spa Merlin Beach",
        hotel_link: links["Phuket Marriott Resort & Spa Merlin Beach"],
        activities: [
          {
            title: "ATV Tour in Phuket *",
            time: "12:30PM - 2:00PM",
            description: "Embark on a 1.5-hour Family ATV tour through Phuket's landscapes, including a visit to the Big Buddha.",
            image: ["/atv.jpeg", "/big-buddha.jpeg","/atv2.jpeg", "/atv3.webp"]
          },
          {
            title: "Afternoon at Resort",
            description: "Spend the afternoon at the resort, enjoying the pool, activities and beachfront.",
            image: ["/merlin.avif", "/merlin2.jpeg", "/merlin3.jpeg", "/merlin4.jpeg"]

          },
          {
            title: "Sea Glass Jewelry Making",
            time: "3:00 PM - 3:30 PM",
            description: "At the Reef Center"
          },
          {
            title: "Kid's Foam Party",
            time: "5:00 PM - 6:00 PM",
            description: "Kids Foam Party at the Resort. Meet at Kids Club 10 mins before.",
          },

          {
            title: "Dinner at D.O.C.G. Italian Restaurant at resort",
            description: "Enjoy a delicious dinner at D.O.C.G. Italian Restaurant, known for its authentic Italian cuisine.",
            link: 'https://drive.google.com/file/d/1P-tAMpk659b_2mqC4WBOhZCkNHzQpLEj/view'

          },
          {
            title: "Malin Plaza Night Market",
            description: "Visit the Malin Plaza Night Market for local food and shopping.",
            image: ["/malin1.webp", "/malin2.webp"]
          }
        ]
      }, {
        day: "June 26th, 2024",
        desc: "Exploring Phuket Optional Activities",
        hotel: "Phuket Marriott Resort & Spa Merlin Beach",
        hotel_link: links["Phuket Marriott Resort & Spa Merlin Beach"],
        activities: [
          {
            title: "Day at the Resort",
            description: "Spend the day at the resort, enjoying the beach and amenities. Kids at the Kids Club.",

          },
          {
            title: "Butterfly Sanctuary Visit for the kids",
            time: "11:00 AM - 11:30 AM",
            description: "Meet at the Kids club 10 mins before to Visit the Butterfly Garden at the resort for a colorful and educational experience.",
          }, 
          {
            title: "Henna Tattoos for adults",
            time: "11:00 AM - 12:00 PM",
            description: "Meet at the beach grill 10 mins before to get a Henna Tattoo at the resort.",
          },
          {
            title: "Waffle making for the kids at the Kids Club",
            time: "2:00 PM - 3:00 PM",
          }, 
          {
            title: "Thai Dessert Making Class for the adults",
            time: "3:00 PM - 4:00 PM",
            description: "Meet at the Beach Lawn 1 10 mins before to learn how to make traditional Thai desserts.",
          }, 
          {
            title: "Face Painting for the kids at the Kids Club",
            time: "5:00 PM - 6:00 PM",
          },
          // {
          //   title: "Optional Activities",
          // },
          // {
          //   title: "Flying Hanuman Zipline",
          //   description: "Experience the thrill of ziplining at Flying Hanuman, exploring Phuket's jungle canopy.",
          //   image: ["/flyinghanuman.jpeg", "/flying2.avif", "/flying3.jpeg"]
          // },
          // {
          //   title: "Carnival Magic",
          //   description: "Visit Carnival Magic for a colorful and lively entertainment experience.",
          //   image: ["/carnival.jpeg", "/carnival2.jpeg"]
          // },
          // {
          //   title: "Bangla Road Nightlife",
          //   description: "Explore the vibrant nightlife of Bangla Road, with its bustling bars and street performances.",
          //   image: ["/bangla.jpeg", "/bangla2.avif"]
          // }, 
          {
            title: "Steak and Meat Dinner buffet at the Resort",
            description: "Enjoy a delicious dinner at the resort, savoring the flavors of Thailand.",
            link: 'https://drive.google.com/file/d/1S6rPkRmwYB481Os_0HAyzjGtNzlS1SVN/view'
          }
        ]
      }, {
        day: "June 27th, 2024",
        desc: "Island Hopping in Phuket",
        hotel: "Phuket Marriott Resort & Spa Merlin Beach",
        hotel_link: links["Phuket Marriott Resort & Spa Merlin Beach"],
        activities: [
          {
            title: "James Bond Island Tour *",
            time: "10:00AM - 4:00PM",
            description: "Enjoy the James Bond Island tour, including visits to the renowned James Bond Island, Hong Island, and Panyee Island.",
            image: ["/jamesbond.jpeg", "/hongisland.jpeg", "/panyee.jpeg"]
          },
          {
            title: "Dinner at Resort",
            description: "Enjoy a delicious dinner at the resort, savoring the flavors of Thailand.",

          },
          {
            title: "Evening at the Resort",
            description: "Spend the evening relaxing at the resort, enjoying the beach and amenities.",
            image: ["/merlin.avif", "/merlin2.jpeg", "/merlin3.jpeg", "/merlin4.jpeg"]
          }

        ]
      }, {
        day: "June 28th, 2024",
        desc: "Jacob's Birthday in Phuket",
        hotel: "Phuket Marriott Resort & Spa Merlin Beach",
        hotel_link: links["Phuket Marriott Resort & Spa Merlin Beach"],
        activities: [ 
          {
            title: "Old Phuket Town",
            description: "Explore Old Phuket Town, known for its Sino-Portuguese architecture and vibrant streets.",
            image: ["/oldPhuket.jpeg", "/old2.webp", "/old3.jpeg"]
          },
          {
            title: "Relax at the Resort",
            description: "Spend the day relaxing at the resort, enjoying the beach and amenities. Kids at the Kids Club.",
          },
          {
            title: "Thai Dessert Making Class for the kids",
            time: "2:00 PM - 3:00 PM",
          },

          {
            title: "Jacob's Birthday Dinner at the Beach Grill at the Resort",
            description: "Celebrate Jacob's birthday with a special dinner at the Beach Grill, known for smoked meat and seafood and beachfront setting.",
            link: 'https://drive.google.com/file/d/1PkKHzFGpEEjTpZYpevWeCW9YJeP8mnR3/view'
          },
          {
            title: "Simon Cabaret Show",
            description: "Enjoy an evening at the Simon Cabaret Show, featuring dazzling performances and entertainment.",
            image: ["/simon1.jpeg", "/simon2.jpeg"]
          }
        ]
      }, {
        day: "June 29th, 2024",
        desc: "Return to Bangkok",
        hotel: "InterContinental Bangkok, an IHG Hotel",
        hotel_link: links["InterContinental Bangkok, an IHG Hotel"],
        activities: [ 
          {
            title: "Check Out of Phuket Marriott Resort & Spa Merlin Beach",
            description: "Prepare for departure, reflecting on the unforgettable experiences in Phuket.",

          },
          {
            title: "Bolt to the Phuket Airport",
            description: "Take a taxi to the airport and check in for your flight to Bangkok.",
          },
          {
            title: "Return to Bangkok",
            time: "1:25 PM - 2:55 PM",
            description: "Relax in Airport lounge before Departing from Phuket to Bangkok via AirAsia 3026. Check into the InterContinental Bangkok, an IHG Hotel.",
            image: "/intercont.webp"
          },
          {
            title: "Fun and Shopping at Iconsiam",
            time: "4:00 PM",
            description: "Spend the afternoon at Iconsiam, a luxury shopping mall with a variety of stores and entertainment options.",
            image: ["/iconsiam.jpeg", "/iconsiam2.jpeg", "/iconsiam3.jpeg"]
          },
          {
            title: "Dinner at Phra Nakhon",
            time: "6:30pm",
            description: "Enjoy a farewell dinner at Michelin Reccomended Phra Nakhon, known for its traditional Thai cuisine and beautiful setting.",
            image: ["/nakhon1.jpeg", "/nakhon2.jpeg"]
          },
          {
            title: "Night at the Asiatique Riverfront",
            description: "Spend the evening at the Asiatique Riverfront, a vibrant night market and entertainment complex.",
            image: ["/asiatique1.jpeg",  "/Asiatique3.jpeg"]
          }
        ]
      }, {
        day: "June 30th, 2024",
        desc: "Back to Tel Aviv",
        activities: [
          {
            title: "Chatuchak Weekend Market",
            time: "10:00 AM - 2:00 PM",
            description: "Explore the vibrant Chatuchak Weekend Market, known for its wide range of products and local finds.",
            image: ["/chat.jpeg", "/chat2.jpeg", "/chat3.webp", "/chat4.jpeg"]
          },
          {
            title: "Lunch at Kalyana Restaurant",
            description: "Enjoy a farewell lunch at Kalyana Restaurant, known for its authentic Thai cuisine.",
          },
          {
            title: "Louis Vuitton Experience",
            description: "Experience the Louis Vuitton Maison in Bangkok, a luxury shopping destination.",
          },
 
          {
            title: "Check Out of InterContinental Bangkok and transfer to the Airport",
            time: "7:30 PM",
            description: "Prepare for departure, reflecting on the incredible experiences in Thailand.",

          },
          {
            title: "Late Night Flight To Tel Aviv",
            time: "11:55 PM",
            description: "Prepare for departure, reflecting on the incredible experiences in Thailand. Flight departs from Bangkok at 11:55PM to Tel Aviv, concluding the memorable trip.",
            image: "/leaving.webp"
          }
        ]
      }
  ];
  
  export default itinerary;
  
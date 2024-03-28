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
            title: "Departure from Tel Aviv to Bangkok",
            description: "Departure on EL AL LY 81 at 11:45 PM, arriving the next day at 3:00 PM.",
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
            description: "3:00PM Arrival at Bangkok's Suvarnabhumi Airport followed by a private transfer to your hotel.",
            image: ["/arrival.webp", "/PHOTO-2023-12-28-20-53-50.jpg", "/PHOTO-2023-12-28-21-06-16.jpg", "/PHOTO-2023-12-28-21-06-28.jpg"]
            
          },
          {
            title: "Thanon Khao San",
            description: "Conclude the day with a stroll through Thanon Khao San, known as the backpacker's haven.",
            image: ["/khaosan-road.webp", "/kha.jpeg"]
          },
          // add another
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
            title: "Damnoen Saduak Floating Market",
            description: "Start with a visit to Damnoen Saduak Floating Market, known for its vibrant atmosphere and colorful vendors.",
            image: ["/damnoen-saduak-floating.jpeg", "/floating2.jpeg"]
          },
          {
            title: "Mae Klong Railway Market",
            description: "Explore Mae Klong, famous for its railway market where vendors quickly retract their awnings and goods every time a train passes through.",
            image: ["/rail.webp", "/klong2.jpeg", "/klong3.jpeg", "/klong4.jpeg"]
          },
          {
            title: "Dinner in Chinatown Night Market",
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
            description: "Morning visit to The Grand Palace, the official residence of the Kings of Siam.",
            image: ["/grand.jpeg", "/grand.webp"]
          },
          {
            title: "Wat Phra",
            description: "Explore Wat Phra Chetuphon, known for its giant reclining Buddha.",
            image: ["/watpho.jpeg", "/whatpho2.jpeg"] 
          },
          { title: "Wat Arun",
            description: "Visit Wat Arun, the Temple of Dawn, known for its stunning riverside views.",
            image: ['/IMG_2012.JPG', '/IMG_2013.JPG', '/IMG_2014.WEBP']
          },
          {
            title: "Wat Traimit",
            description: "Visit Wat Traimit, the Temple of the Golden Buddha.",
            image: ["/traimit.jpeg", "/WatTraimit.jpeg"]
          },
          { title: "Saket Temple",
            description: "Climb the Golden Mount at Wat Saket for panoramic views of Bangkok.",
            image: ['/IMG_2008.JPG', '/IMG_2009.JPG']
          },
          {
            title: "Anniversary Dinner at R-Haan a 2 Star Michelin Restaurant",
            description: "Conclude the day with a special anniversary dinner at R-Haan, a known for its authentic Thai cuisine.",
            image: ['/IMG_2010.JPG', '/IMG_2011.JPG']
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
            description: "Catch a flight from Bangkok to Chiang Mai with AirAsia, departing at 11:25 AM and arriving at 12:40 PM. Check into the U Chiang Mai Hotel upon arrival.",
            image: ["/takeoff.webp", "/uchiang.jpeg"] 
          },
          {
            title: "Huen Phen",
            description: "Enjoy a traditional Northern Thai lunch at Huen Phen, known for its authentic cuisine.",
            image: ["/huen-phen.jpg", "/phen2.jpeg", "/phen3.jpeg"]
          },
          { title: "Wat Phan On",
            description: "Visit Wat Phan On, a beautiful temple in the heart of Chiang Mai.",
            image: ['/IMG_2025.JPG']
          },
          { title: "Wat Phra That Doi Suthep",
            description: "Explore Wat Phra That Doi Suthep, a sacred temple atop Doi Suthep mountain.",
            image: ['/IMG_2026.JPG', '/IMG_2027.JPG']
          },
          {
            title: "Neng Earthen Jar Roast Pork",
            description: "Enjoy a delicious lunch at Neng Earthen Jar Roast Pork, known for its local cuisine.",
            image: ["/Neng-Earthen-Jar-Roast-Pork-4.jpeg", "/pork2.jpeg", "/pork1.jpeg", "/pork4.jpeg"] 
          },
          {
            title: "Visit the Chiang Mai Night Bazaar",
            description: "Explore the vibrant Chiang Mai Night Bazaar, known for its local crafts, food, and entertainment.",
            image: ["/chiangMaiNight.webp", "/night2.jpeg", "/night3.jpeg", "/night4.jpeg"] 
          },
          { title: "Late night snack at Kha Soi Lung Prakit Kad Kom",
            description: "Conclude the day with a late-night snack at Kha Soi Lung Prakit Kad Kom, a Michelin Recognized restuarant.",
            image: ["/Khao Soi 1.webp"]
          }
        ]
      }, {
        day: "June 20th, 2024",
        desc: "Chiang Mai Elephant Sanctuary and Evening Entertainment",
        hotel: "U Chiang Mai Hotel",
        hotel_link: links["U Chiang Mai Hotel"],
        activities: [
          {
            title: "Maerim Elephant Sanctuary *",
            description: "Half-day morning visit to Maerim Elephant Sanctuary for an intimate experience with elephants.",
            image: ["/elephants.jpeg", "/maerim2.webp", "/maerim3.jpeg"]
          },
          {
            title: "Chang Phueak Pork Leg Rice",
            description: "Savor a delicious dinner at Chang Phueak Pork Leg Rice, known for its local specialties.",
            image: ["/Khao-Kha-Moo.jpg", "/leg2.jpeg", "/leg3.jpeg", "/leg4.jpeg"]
          },

          {
            title: "Chiang Mai Cabaret Show",
            description: "Enjoy an evening at the Chiang Mai Cabaret Show, featuring colorful performances and entertainment.",
            image: ["/caberet.jpeg", "/cabaret2.jpeg", "/cabaret3.jpeg", "/cabaret4.jpeg"]
          }
        ]
      }, {
        day: "June 21st, 2024",
        desc: "Chiang Mai to Krabi",
        hotel: "Holiday Ao Nang Beach Resort Krabi",
        hotel_link: links["Holiday Ao Nang Beach Resort Krabi"],
        activities: [
          {
            title: "Wat Chedi Luang",
            description: "Visit Wat Chedi Luang, known for its ancient ruins and towering stupa.",
            image: ["/WatChediLuang.jpeg","/Chedi2.jpeg", "/Chedi4.jpeg"] 
          },
          {
            title: "Wat Phra Singh",
            description: "Explore Wat Phra Singh, a beautiful temple in the heart of Chiang Mai.",
            image: ["/singh.jpeg", "/singh2.png"]
          },
          {
            title: "Sapun Fried Chicken",
            description: "Savor a delicious lunch at Sapun Fried Chicken, a local favorite.",
            image: ["/sapun.jpeg"]
          },
          {
            title: "Wat Suan dok",
            description: "Visit Wat Suan dok, a beautiful temple in Chiang Mai.",
            image: ["/suan.jpeg", "/suan2.jpeg"]
          },
          {
            title: "Flight to Krabi",
            description: "Depart from Chiang Mai to Krabi with AirAsia, taking off at 4:25 PM and landing at 6:25 PM. Check into the Holiday Ao Nang Beach Resort Krabi upon arrival.",
            image: ["/takeoff2.webp", "/krabihotel.jpeg"]
          },
          {
            title: "Dinner at Carnivore Steak and Grill",
            description: "Enjoy a delicious dinner at Carnivore Steak and Grill, known for its grilled specialties and cozy ambiance.",
            image: ["/carnivore.jpeg", "/carnivore2.jpeg"]

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
            description: "Visit the breathtaking Phi Phi Islands for swimming, snorkeling, and enjoying the landscapes.",
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
            description: "Embark on a 1.5-hour Family ATV tour through Phuket's landscapes, including a visit to the Big Buddha.",
            image: ["/atv.jpeg", "/big-buddha.jpeg","/atv2.jpeg", "/atv3.webp"]
          },
          {
            title: "Afternoon at Resort",
            description: "Spend the afternoon at the resort, enjoying the pool and beachfront.",
            image: ["/merlin.avif", "/merlin2.jpeg", "/merlin3.jpeg", "/merlin4.jpeg"]

          }
        ]
      }, {
        day: "June 26th, 2024",
        desc: "Exploring Phuket Optional Activities",
        hotel: "Phuket Marriott Resort & Spa Merlin Beach",
        hotel_link: links["Phuket Marriott Resort & Spa Merlin Beach"],
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
          }, 
          {
            title: "Naughty Nuri's",
            description: "Enjoy a delicious dinner at Naughty Nuri's, known for its BBQ ribs and lively atmosphere.",
            image: ["/naught1.jpeg"]
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
            description: "Enjoy the James Bond Island tour, including visits to the renowned James Bond Island, Hong Island, and Panyee Island.",
            image: ["/jamesbond.jpeg", "/hongisland.jpeg", "/panyee.jpeg"]
          },
          { 
            title: "Afternoon at the Resort",
            description: "Relax at the resort, enjoying the beach and amenities.",
            image: ["/merlin.avif", "/merlin2.jpeg", "/merlin3.jpeg", "/merlin4.jpeg"]
          },
          {
            title: "Malin Plaza Night Market",
            description: "Visit the Malin Plaza Night Market for local food and shopping.",
            image: ["/malin1.webp", "/malin2.webp"]
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
            title: "Return to Bangkok",
            description: "Depart from Phuket to Bangkok via AirAsia, leaving Phuket at 1:25 PM and arriving in Bangkok at 2:55 PM. Check into the InterContinental Bangkok, an IHG Hotel.",
            image: "/intercont.webp"
          },
          {
            title: "Visit Raan Jay Fai",
            description: "Conclude the trip with a memorable dinner at Raan Jay Fai, a Michelin-starred street food restaurant.",
            image: ["/raan.jpeg", "/raan2.jpeg", "/raan3.jpeg"]
          },
          {
            title: "Dinner at Phra Nakhon",
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
        desc: "Departure Day",
        activities: [
          {
            title: "Chatuchak Weekend Market",
            description: "Explore the vibrant Chatuchak Weekend Market, known for its wide range of products and local finds.",
            image: ["/chat.jpeg", "/chat2.jpeg", "/chat3.webp", "/chat4.jpeg"]
          },
          {
            title: "Lunch at Kalyana Restaurant",
            description: "Enjoy a farewell lunch at Kalyana Restaurant, known for its authentic Thai cuisine.",
          },
          {
            title: "Fun and Shopping at Iconsiam",
            description: "Spend the afternoon at Iconsiam, a luxury shopping mall with a variety of stores and entertainment options.",
            image: ["/iconsiam.jpeg", "/iconsiam2.jpeg", "/iconsiam3.jpeg"]
          },
          {
            title: "Late Night Flight To Tel Aviv",
            description: "Prepare for departure, reflecting on the incredible experiences in Thailand. Flight departs from Bangkok at 11:55PM to Tel Aviv, concluding the memorable trip.",
            image: "/leaving.webp"
          }
        ]
      }
  ];
  
  export default itinerary;
  
import React, { useEffect, useState } from 'react';
import Carousel from '@/components/Carousel.client';

// Define the structure of the feature object
interface Feature {
    type: string;
    properties: {
        name: string;
        address_line1: string;
        address_line2: string;
        formatted: string;
        datasource: {
            raw: {
                fee: string;
                image?: string; // Optional because not all features might have an image
                email?: string; // Optional for the same reason
            }
        };
        categories: string[];
        place_id: string;
    };
    geometry: {
        type: string;
        coordinates: [number, number];
    };
    images?: string[]; // Optional array to store image URLs
}

export default function ThailandNews() {
    const [features, setFeatures] = useState<Feature[]>([]);
    const [place, setPlace] = useState<string | null>(null);

    // List of places
    const places = {
        patong: 'place:51e8c8f1d7c09358405994d343d900991f40f00101f901f9e8d50000000000c00207',
        bangkok: 'place:513c725aa6951f594059b2e20ade46812b40f00103f901b07a0c6100000000c00207',
        chaingMai: 'place:51883144a918bf584059af29eb92ccc93240f00103f9011cec9c0a00000000c00206',
        krabi: 'place:51e23d0796a3ba58405960f767507e202040f00103f901bef5f01c00000000c002079203054b72616269',
        aoNang: 'rect:98.7972986543486,8.058321020739408,98.85190215184838,8.004167661135616'
    };

    useEffect(() => {
        if (place) {
            const apiUrl = `https://api.geoapify.com/v2/places?categories=tourism.attraction&filter=${place}&lang=en&limit=8&apiKey=69e94056cef24cef99973f7c8d887d3a`;
            fetch(apiUrl)
                .then((response) => response.json())
                .then(async (data) => {
                    console.log('Points of interest:', data);
    
                    // Create a Set to track unique address_line1 values
                    const seenAddresses = new Set();
                    
                    // Filter features to keep only those with unique address_line1
                    const uniqueFeatures = data.features.filter((feature: Feature) => {
                        const address = feature.properties.address_line1;
                        if (!seenAddresses.has(address)) {
                            seenAddresses.add(address);
                            return true;
                        }
                        return false;
                    });
    
                    // Iterate over each unique feature to fetch image URLs
                    const updatedFeatures = await Promise.all(uniqueFeatures.map(async (feature: Feature) => {
                        const address = feature.properties.address_line1.replace(/ /g, '%20'); // Replace spaces with %20
                        const imageResponse = await fetch('https://google-api31.p.rapidapi.com/imagesearch', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                                'X-RapidAPI-Key': '1027227577msh0e5df17eb151f38p1cfe4bjsnd2fe5b28d286',
                                'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
                            },
                            body: JSON.stringify({
                                text: address,
                                safesearch: 'off',
                                region: 'wt-wt',
                                color: '',
                                size: '',
                                type_image: '',
                                layout: '',
                                max_results: 5 // Limit to 5 results for simplicity
                            })
                        });
    
                        const imageResult = await imageResponse.json();
                        feature.images = imageResult.result.map((img: any) => img.image); // Store only the image URLs
                        return feature;
                    }));
    
                    setFeatures(updatedFeatures);
                })
                .catch((error) => {
                    console.error('Error fetching points of interest:', error);
                });
        }
    }, [place]);
    

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-4">
                {Object.entries(places).map(([key, value]) => (
                    <button key={key} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => setPlace(value)}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {features.map((feature) => (
                    <div key={feature.properties.place_id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            <div className="font-bold text-black text-xl mb-2">{feature.properties.address_line1}</div>
                            <p className="text-gray-700 text-base">Location: {feature.properties.address_line2}</p>
                            <p className="text-gray-700 text-base">Fee: {feature.properties.datasource.raw.fee === 'yes' ? 'Yes' : 'No'}</p>
                            <p className="text-gray-700 text-base">Contact: {feature.properties.datasource.raw.email ? feature.properties.datasource.raw.email : 'Not available'}</p>
                        </div>
                        {feature.images && feature.images.length > 0 && (
                            <Carousel
                                activity={{
                                    title: feature.properties.address_line1,
                                    description: `Location: ${feature.properties.address_line2}...`, // Constructed description
                                    image: feature.images
                                }}
                                imageSizeClass="md:w-full w-1/2" // Custom image size class
                            />
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}



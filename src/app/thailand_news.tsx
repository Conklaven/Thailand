import React, { useEffect, useState } from 'react';

export default function ThailandNews() {
    // const [lat, setLat] = useState(null);
    // const [lng, setLng] = useState(null);
    const [features, setFeatures] = useState([]);

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const apiUrl = 'https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=Bangkok';
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': 'YOUR_API_KEY', // Replace 'YOUR_API_KEY' with your actual API key
    //                 'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
    //             }
    //         };

    //         fetch(apiUrl, options)
    //             .then((response) => response.json())
    //             .then((data) => {
    //                 setLat(data.lat);
    //                 setLng(data.lon);
    //             })
    //             .catch((error) => {
    //                 console.error('Error fetching location:', error);
    //             });
    //     }
    // }, []);

   const lat = 41.397158;
    const lng = 2.160873;

    //amedeus api

    // useEffect(() => {
    //     const postUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';
    //     const details = {
    //         'grant_type': 'client_credentials',
    //         'client_id': 'pjlt64vrRG1JUQl7JkQsRwvU88wQw1GK', // Ensure this is your correct client_id
    //         'client_secret': 'aiGNbECYgI6fvQIB' // Ensure this is your correct client_secret
    //     };
    
    //     let formBody = [];
    //     for (let property in details) {
    //         let encodedKey = encodeURIComponent(property);
    //         let encodedValue = encodeURIComponent(details[property]);
    //         formBody.push(encodedKey + "=" + encodedValue);
    //     }
    //     formBody = formBody.join("&");
    
    //     const postOptions = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: formBody
    //     };
    
    //     fetch(postUrl, postOptions)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Token:', data);
    //                 const apiUrl = `https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=${lat}&longitude=${lng}&radius=1&page%5Blimit%5D=10&page%5Boffset%5D=0`;
    //                 const options = {
    //                     method: 'GET',
    //                     headers: {
    //                         'Authorization': `Bearer ${data.access_token}`
    //                     }
    //                 };

    //                 fetch(apiUrl, options)
    //                     .then((response) => response.json())
    //                     .then((data) => {
    //                         console.log('Points of interest:', data);
    //                     })
    //                     .catch((error) => {
    //                         console.error('Error fetching points of interest:', error);
    //                     });
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching token:', error);
    //         });
    // }, [lat, lng]);

    return (
            <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {features.map((feature) => (
                    <div key={feature.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{feature.properties.name}</div>
                            <p className="text-gray-700 text-base">
                                Distance: {feature.properties.dist.toFixed(2)} meters
                            </p>
                            <p className="text-gray-700 text-base">
                                Rate: {feature.properties.rate}
                            </p>
                            <p className="text-gray-700 text-base">
                                Kinds: {feature.properties.kinds.split(',').join(', ')}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{feature.properties.xid}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

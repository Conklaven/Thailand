// Shopping.js
import restaurants from '../../../data/restaurants';

export default function restaurant() {
    const bangkokRestaurants = restaurants.filter(restaurant => restaurant.city === 'Bangkok');

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Bangkok Restaurants</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bangkokRestaurants.map(restaurant => (
                    <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl text-black font-bold mb-2">{restaurant.name}</h2>
                            <p className="text-gray-700 mb-2">{restaurant.description}</p>
                            <p className="text-gray-600">{restaurant.address}</p>
                            <p className="text-gray-600">{restaurant.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Shopping.js
import restaurants from '../../../data/restaurants';

export default function restaurant() {
    const phuketRestaurants = restaurants.filter(restaurant => restaurant.city === 'Phuket');

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Phuket Restaurants</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {phuketRestaurants.map(restaurant => (
                    <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl text-black font-bold mb-2">{restaurant.name}</h2>
                            <p className="text-gray-700 mb-2">{restaurant.description}</p>
                            <p className="text-gray-600">
                                <a rel="noopener noreferrer" target="_blank" href={`https://maps.google.com/?q=${restaurant.name}`}>
                                    {restaurant.address}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

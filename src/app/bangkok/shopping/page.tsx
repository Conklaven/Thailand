import shops from '../../../data/shopping';

export default function shopping() {
    const bangkokShopping = shops.filter(shop => shop.city === 'Bangkok');

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Bangkok Shopping</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bangkokShopping.map(shop => (
                    <div key={shop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={shop.image} alt={shop.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl text-black font-bold mb-2">{shop.name}</h2>
                            <p className="text-gray-700 mb-2">{shop.description}</p>
                            <p className="text-gray-600">{shop.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
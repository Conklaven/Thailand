import shops from '../../../data/shopping';

export default function shopping() {
    const chiangMaiShopping = shops.filter(shop => shop.city === 'Chiang Mai');

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Chiang Mai Shopping</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {chiangMaiShopping.map(shop => (
                    <div key={shop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={shop.image} alt={shop.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl text-black font-bold mb-2">{shop.name}</h2>
                            <p className="text-gray-700 mb-2">{shop.description}</p>
                            <p className="text-gray-600">
                                <a rel="noopener noreferrer" target="_blank" href={`https://maps.google.com/?q=${shop.name} ${shop.city}`}>
                                    {shop.address}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
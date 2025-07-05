function ExploreSection({ city, spots, images }) {
  if (!spots?.length) return null;

  return (
    <div className="px-6 py-12">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        Things to Explore in {city}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {spots.map((spot, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={images[index % images.length] || "/assets/default.jpg"}
              alt={spot.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{spot.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{spot.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreSection;                                                                               
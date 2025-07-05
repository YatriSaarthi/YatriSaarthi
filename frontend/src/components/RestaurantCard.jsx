import React from 'react';

const RestaurantCard = ({ restaurant, image }) => {
  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden h-64 w-full mb-6">
  {/* Left: Restaurant Image */}
  <div className="w-1/3 h-full">
    <img
      src={image}
      alt={restaurant.Name}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right: Content */}
  <div className="p-6 w-2/3 space-y-3">
    <div className="flex">
      <span className="w-24 text-black font-semibold">Name:</span>
      <span className="text-gray-800 font-medium">{restaurant.Name}</span>
    </div>

    <div className="flex">
      <span className="w-24 text-black font-semibold">Location:</span>
      <span className="text-gray-700">{restaurant.Location}</span>
    </div>

    <div className="flex">
      <span className="w-24 text-black font-semibold">Cuisine:</span>
      <span className="text-gray-700">{restaurant.Cuisine}</span>
    </div>

    <div className="flex">
      <span className="w-24 text-black font-semibold">Rating:</span>
      <span className="text-yellow-600 font-semibold">⭐ {restaurant.Rating} / 5</span>
    </div>
  </div>
</div>

  );
};

export default RestaurantCard;


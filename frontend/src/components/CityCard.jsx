import React from 'react';
const CityCard = ({ cityName, image, tagline }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={image} alt={cityName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{cityName}</h3>
        <p className="text-sm text-gray-500">{tagline}</p>
      </div>
    </div>
  );
};

export default CityCard;

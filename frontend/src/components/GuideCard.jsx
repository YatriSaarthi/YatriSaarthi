import React from 'react';
const GuideCard = ({ name, city, image, expertise }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{city}</p>
        <p className="text-sm mt-2 italic text-blue-600">{expertise}</p>
        <button className="mt-3 px-4 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-500">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default GuideCard;

// src/components/HotelCard.jsx
import React from 'react';

const HotelCard = ({ hotel, image }) => {
  return (
   <div className="flex bg-blue-50 drop-shadow-lg hover:drop-shadow-2xl rounded-xl overflow-hidden h-[220px] w-full mb-6 transition duration-300">
      {/* Left side image */}
      <div className="w-1/3 h-full">
        <img
          src={image}
          alt={hotel.HotelName}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side content */}
      <div className="w-2/3 p-4 flex flex-col justify-evenly">
        <p><span className="font-bold text-black">Name: </span>{hotel.HotelName}</p>
        <p><span className="font-bold text-black">City: </span>{hotel.City}</p>
        <p><span className="font-bold text-black">Address: </span>{hotel.Address}</p>
        <p><span className="font-bold text-black">Category: </span>{hotel.Category}</p>
        <p><span className="font-bold text-black">Total Rooms: </span>{hotel.TotalRooms}</p>
      </div>
    </div>
  );
};

export default HotelCard;

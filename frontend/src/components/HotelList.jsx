import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HotelCard from './HotelCard';

const HotelList = () => {
  const { cityName } = useParams();
  const [hotels, setHotels] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get(`/api/hotels/${cityName}`);
        setHotels(res.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [cityName]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-black mb-4  decoration-blue-400">
          Hotels in {cityName}
        </h1>
        <p className="text-center text-black-600 mb-10 text-lg">
          Discover top stays to make your trip to <span className="capitalize font-semibold">{cityName}</span> unforgettable.
        </p>

        {/* Hotel Cards */}
        {loading ? (
          <p className="text-center text-gray-500">Loading hotels...</p>
        ) : hotels.length === 0 ? (
          <p className="text-center text-gray-400">No hotels found.</p>
        ) : (
          <>
            <div className="flex flex-col gap-6">
              {hotels.slice(0, visibleCount).map((hotel, idx) => {
                const cityFolder = hotel.City?.toLowerCase().trim();
                const randomIndex = Math.floor(Math.random() * 8) + 1;
                const image = `/hotels_image/${cityFolder}/res${randomIndex}.jpg`;

                return (
                  <div
                    key={hotel._id}
                    className="transform hover:scale-[1.01] transition duration-300 ease-in-out"
                  >
                    <HotelCard hotel={hotel} image={image} />
                  </div>
                );
              })}
            </div>

            {/* View More Button */}
            {visibleCount < hotels.length && (
              <div className="text-center mt-10">
                <button
                  onClick={handleViewMore}
                  className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition transform hover:scale-105"
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HotelList;

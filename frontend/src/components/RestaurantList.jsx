// src/components/RestaurantList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';
import { useParams } from 'react-router-dom';

const RestaurantList = () => {
  const { cityName } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!cityName) return;
      setLoading(true);
      try {
        const res = await axios.get(`/api/restaurants/${cityName}`);
        if (Array.isArray(res.data)) {
          setRestaurants(res.data);
        } else {
          setRestaurants([]);
          console.error("Unexpected response:", res.data);
        }
      } catch (err) {
        console.error('Error fetching restaurants:', err);
        setRestaurants([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [cityName]);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-black mb-4 decoration-blue-400">
          Restaurants in {cityName}
        </h1>
        <p className="text-center text-black-600 mb-10 text-lg">
          Taste the most delicious food from <span className="capitalize font-semibold">{cityName}</span>'s top restaurants.
        </p>

        {/* Restaurant Cards */}
        {loading ? (
          <p className="text-center text-gray-500">Loading restaurants...</p>
        ) : restaurants.length === 0 ? (
          <p className="text-center text-gray-400">No restaurants found.</p>
        ) : (
          <>
            <div className="flex flex-col gap-6">
              {restaurants.slice(0, visibleCount).map((res) => {
                const randomIndex = Math.floor(Math.random() * 9) + 1;
                const cityFolder = res.City?.toLowerCase().trim();
                const image = `/restaurant_image/${cityFolder}/res${randomIndex}.jpg`;

                return (
                  <div
                    key={res._id}
                    className="transform hover:scale-[1.01] transition duration-300 ease-in-out"
                  >
                    <RestaurantCard restaurant={res} image={image} />
                  </div>
                );
              })}
            </div>

            {/* View More Button */}
            {visibleCount < restaurants.length && (
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

export default RestaurantList;

import React from 'react';
const FeaturedFestival = () => {
  return (
    <div
      className="relative h-64 md:h-96 bg-cover bg-center mt-12 rounded-xl mx-4 md:mx-12 overflow-hidden shadow-lg"
      style={{
        backgroundImage: "url('diwali-banner.jpg')", // Replace with any festival banner
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 md:px-12 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Festival of the Month</h2>
        <p className="text-lg md:text-xl max-w-2xl">
          ✨ Celebrate the lights, joy and traditions of <span className="font-semibold text-yellow-400">Diwali</span> across India. Explore the best places to experience it.
        </p>
        <button className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition w-fit">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default FeaturedFestival;

import React from 'react';
const PlanTourCTA = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-6 rounded-xl mx-4 md:mx-12 mt-16 shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Plan a Personalized Tour with Local Experts
        </h2>
        <p className="text-lg mb-6">
          Connect with experienced, verified guides who know your destination inside-out — from food joints to secret trails.
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition duration-300">
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default PlanTourCTA;

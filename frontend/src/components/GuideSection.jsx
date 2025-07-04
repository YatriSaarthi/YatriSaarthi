import React from 'react';
import { Link } from 'react-router-dom';

const GuideSection = () => {
  return (
    <div className="container mx-auto px-4 py-14">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src="/city_image/guide.webp"
            alt="Guide"
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Add life to your journey with our Guides
          </h1>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Plan your perfect trip with the help of our experienced guides.
            Discover the culture, food, history, and hidden gems of every city with ease and joy.
          </p>
          <Link to="/book">
            <button className="bg-blue-600 text-white px-7 py-3.5 rounded-lg text-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;

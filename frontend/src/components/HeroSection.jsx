import SearchBar from "./SearchBar";
import ThemeCard from "../components/ThemeCard";
import { FaUmbrellaBeach, FaMapMarkedAlt, FaUtensils, FaLandmark, FaMountain } from "react-icons/fa";
import { MdCelebration } from "react-icons/md"; // ✅ This is the replacement
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/hero.jpg')", // Put a nice full-screen image in public/assets/
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Incredible <span className="text-yellow-400">India</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-xl">
          Find festivals, food, places & experiences across Indian cities.
        </p>

        {/* Search Bar */}
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSection;

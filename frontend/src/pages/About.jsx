// src/pages/About.jsx

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          About <span className="text-yellow-500">YatriSaarthi</span>
        </h1>
        <p className="text-gray-700 text-xl mb-10 max-w-3xl mx-auto">
          Your trusted travel companion to explore, experience, and enjoy the real India with authentic local insights.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="about.jpeg" // place a beautiful travel-themed SVG or image in public folder
            alt="About YatriSaarthi"
            className="rounded-lg shadow-lg w-full"
          />

          <div className="text-left">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              YatriSaarthi is a platform designed to empower travelers by connecting them with local guides, authentic experiences, and hidden gems across Indian cities. We bridge the gap between curious travelers and knowledgeable locals.
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              To revolutionize travel in India by providing personalized, culturally-rich journeys that go beyond mainstream tourism. We envision an India where every traveler discovers its true essence with the help of passionate local experts.
            </p>

            <h2 className="text-3xl font-bold text-blue-600 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Verified local guides with deep cultural knowledge</li>
              <li>Personalized city explorations and curated experiences</li>
              <li>Discover local food, festivals, architecture, and nature</li>
              <li>Seamless booking and trustworthy recommendations</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Why Choose Us?</h2>
          <p className="text-gray-700 text-lg">
            At YatriSaarthi, we believe that travel is not just about visiting places – it's about creating stories, understanding cultures, and making lifelong connections. We bring you experiences that are real, immersive, and unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

// Dummy HomePage with search functionality
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      navigate(`/city/${city.toLowerCase()}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Discover Cities</h1>
      <form
        onSubmit={handleSearch}
        className="flex w-full max-w-md gap-3"
      >
        <input
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default HomePage;

import React, { useState, useEffect } from 'react';
import citiesData from '../data/data.json';

function CitySearch() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCities(citiesData); // Assuming data.json is imported
  }, []);

  const searchCity = () => {
    const foundCity = cities.find(
      (c) => c.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundCity) {
      setSelectedCity(foundCity);
    } else {
      alert('City not found. Please try again.');
    }
  };

  return (
    <div className="px-4 my-6">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full"
        />
        <button onClick={searchCity} className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {selectedCity && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="card card-cover1 overflow-hidden text-white rounded-2xl shadow-lg"
              style={{ backgroundImage: `url(${selectedCity[`cardImage${i}`]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="backdrop-brightness-50 p-5 h-full flex flex-col justify-end">
                <h2 className="text-xl font-bold">{selectedCity.festival}</h2>
                <h4 className="text-lg">{selectedCity.name}</h4>
                <p>{selectedCity.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CitySearch;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const TouristPlaces = () => {
  const { cityName } = useParams();
  const [places, setPlaces] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/tourist/${cityName}`);
        setPlaces(Array.isArray(res.data.places) ? res.data.places : []);
        setImages(shuffleArray(res.data.images || []));
        setError("");
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setError("Failed to fetch tourist places. Please try again.");
        setPlaces([]);
        setImages([]);
      }
    };

    fetchCityData();
  }, [cityName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 p-6 relative overflow-hidden">
      {/* Floating Background Circles */}
      <div className="absolute w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 left-10" />
      <div className="absolute w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-0 right-10" />

      {/* Heading */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-orange-700 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore
        </motion.h1>

        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {cityName}
          <span
            className="absolute left-0 -bottom-3 w-full h-3 bg-repeat-x bg-center"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10\" fill=\"transparent\" stroke=\"%23f97316\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>')",
            }}
          />
        </motion.h2>
      </div>

      {/* Error Display */}
      {error && (
        <div className="text-center text-red-600 font-semibold mb-6">
          {error}
        </div>
      )}

      {/* Gallery */}
      {images.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            🖼️ City Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-4">
            {images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="rounded-xl object-cover w-full h-48 shadow-md hover:scale-110 hover:shadow-xl transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tourist Places */}
      {places.length > 0 && (
        <>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            📍 Top Tourist Places in {cityName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {places.map((place, idx) => {
              const bgImage = images[idx % images.length] || "";
              return (
                <motion.div
                  key={idx}
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl group transform hover:scale-[1.02] transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ height: "300px" }}
                >
                  {/* Blurred Background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(6px)",
                      transform: "scale(1.05)",
                      zIndex: 0,
                    }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 z-10 group-hover:bg-opacity-40 transition-all" />

                  {/* Content */}
                  <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-6 py-5 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl">
                    <h3 className="text-xl font-bold text-orange-300 mb-2">
                      {place.name}
                    </h3>
                    <p className="italic text-sm text-gray-200 line-clamp-3 mb-4">
                      {place.significance}
                    </p>

                    <div className="text-sm space-y-2 w-full max-w-xs">
                      <Detail label="Type" value={place.type} />
                      <Detail label="Best Time" value={place.bestTimeToVisit} />
                      <Detail label="Est. Year" value={place.establishmentYear || "Unknown"} />
                      <Detail label="Entrance Fee" value={`₹${place.entranceFee || "Free"}`} />
                      <Detail label="Rating" value={`⭐ ${place.googleRating || "N/A"}`} />
                      <Detail label="DSLR Allowed" value={place.dslrAllowed || "Info not available"} />
                      <Detail label="Airport Nearby" value={place.airportNearby || "Not specified"} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div className="flex justify-between text-gray-100">
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
);

export default TouristPlaces;

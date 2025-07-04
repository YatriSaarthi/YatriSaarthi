import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";



const shuffleArray = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

function HomeToExp() {
  const { cityName } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/explore/${cityName}`);
        res.data.images = shuffleArray(res.data.images || []);
        setData(res.data);
        setError("");
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setError("No data found or server error.");
        setData(null);
      }
    };

    if (cityName) fetchData();
  }, [cityName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-50 p-6 relative overflow-hidden">
      {/* Floating Background Circles */}
      <div className="absolute w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-0 right-10"></div>

      {/* Title */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-orange-700 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Specialties of
        </motion.h1>

        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {cityName || "Indian Cities"}
          <span
            className="absolute left-0 -bottom-3 w-full h-3 bg-repeat-x bg-center"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10\" fill=\"transparent\" stroke=\"%23f97316\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>')",
            }}
          ></span>
        </motion.h2>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-center text-red-600 font-semibold mb-6">
          {error}
        </div>
      )}

      {/* Gallery */}
      {data?.images?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            ✨ City Gallery ✨
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-4">
            {data.images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Gallery ${idx}`}
                className="rounded-xl object-cover w-full h-48 shadow-md hover:scale-110 hover:shadow-xl transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Specialties Section */}
      {data && data.spots?.length > 0 && (
        <>
          <h2 className="text-3xl font-bold text-center text-gray-800 mt-12 mb-8">
            🌟 Top Specialties & Things to Explore in {data.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {data.spots.map((spot, idx) => {
              const bgImage = data.images[idx % data.images.length] || "";
              return (
                <motion.div
                  key={idx}
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl group transform hover:scale-[1.02] transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ height: "250px" }}
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
                  ></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 z-10 group-hover:bg-opacity-40 transition-all"></div>

                  {/* Content */}
                  <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 py-6 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl">
                    <h3 className="text-xl font-bold text-orange-300 mb-1">
                      {spot.name}
                    </h3>
                    <p className="italic text-sm text-gray-100 line-clamp-3">
                      {spot.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default HomeToExp;

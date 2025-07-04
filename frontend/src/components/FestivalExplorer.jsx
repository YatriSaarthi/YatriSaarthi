import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const shuffleArray = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

function FestivalExplorer() {
  const { cityName } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/festivals/${cityName}`);
        res.data.images = shuffleArray(res.data.images || []);
        setData(res.data);
        setError("");
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setError("City not found or server error.");
        setData(null);
      }
    };

    if (cityName) {
      fetchFestivals();
    }
  }, [cityName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-50 p-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-0 right-10"></div>

      {/* Heading */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-purple-700 mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the festivals of
        </motion.h1>

        <motion.h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-rose-500 to-yellow-400 tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {cityName}
          <span
            className="absolute left-0 -bottom-3 w-full h-3 bg-repeat-x bg-center"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10\" fill=\"transparent\" stroke=\"%23fb7185\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>')",
            }}
          ></span>
        </motion.h2>
      </div>

      {/* Error */}
      {error && <div className="text-center text-red-600 font-semibold mb-6">{error}</div>}

      {/* Festival Gallery */}
      {data?.images?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🎉 Festival Gallery 🎉</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-4">
            {data.images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Festival ${idx}`}
                className="rounded-xl object-cover w-full h-48 shadow-md hover:scale-110 hover:shadow-xl transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Festival Cards */}
      {data?.festivals?.length > 0 && (
        <>
          <h2 className="text-3xl font-bold text-center text-gray-800 mt-12 mb-8">
            🌟 Festivals in {data.state}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {data.festivals.map((festival, idx) => {
              const bgImage = data.images[idx % data.images.length] || "";

              return (
                <motion.div
                  key={idx}
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl group transform hover:scale-[1.02] transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ height: "280px" }}
                >
                  {/* Blurred BG */}
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
                    <h3 className="text-xl font-bold text-yellow-300 mb-1">
                      {festival.festival_name}
                    </h3>
                    <p className="line-clamp-3 text-sm">{festival.description}</p>
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

export default FestivalExplorer;

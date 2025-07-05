import React from "react";
const images = [
  "/social/1.jpg",
  "/social/2.jpg",
  "/social/3.jpg",
  "/social/4.jpg",
  "/social/5.jpg",
  "/social/6.jpg",
  "/social/7.jpg",
  "/social/8.jpg",
];

const SocialGallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">#YatriSaarthi Moments</h2>
      <p className="text-center text-gray-600 mb-10">Explore snapshots shared by our travelers and guides</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl">
            <img
              src={src}
              alt={`social-${idx}`}
              className="w-full h-48 object-cover transform hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialGallery;

import React from "react";
const testimonials = [
  {
    name: "Shalini Pandey",
    city: "Jaipur",
    text: "Thanks to YatriSaarthi, I discovered the Kite Festival in Jaipur — a truly unforgettable experience!",
    image: "/users/shalini.jpg",
  },
  {
    name: "Shreya Awasthi",
    city: "Varanasi",
    text: "I found the best local food and spiritual spots through this site. Highly recommended!",
    image: "/users/shreya.jpg",
  },
  {
    name: "Sumit Mishra",
    city: "Goa",
    text: "Loved the beach guides and the Diwali celebration recommendations in Panaji!",
    image: "/users/sumit.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12 mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Traveler Stories</h2>
      <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <p className="text-gray-600 italic mb-2">"{t.text}"</p>
            <h4 className="font-semibold text-gray-800">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

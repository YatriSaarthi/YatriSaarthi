import React from 'react';
const WhyUsCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="text-4xl text-blue-600 mb-4" aria-label={title}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default WhyUsCard;

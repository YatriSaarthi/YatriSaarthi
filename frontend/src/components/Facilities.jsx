import React from 'react';

const facilities = [
  {
    title: 'Ganeshotsav',
    city: 'Mumbai',
    desc: 'Witness and attain the biggest of enlightenments in the city of Ganga mata.',
    image: '/assets/ganpati-puja.jpg',
  },
  {
    title: 'Ganeshotsav',
    city: 'Mumbai',
    desc: 'Witness and attain the biggest of enlightenments in the city of Ganga mata.',
    image: '/assets/ganpati-puja.jpg',
  },
  {
    title: 'Ganeshotsav',
    city: 'Mumbai',
    desc: 'Witness and attain the biggest of enlightenments in the city of Ganga mata.',
    image: '/assets/ganpati-puja.jpg',
  },
];

const Facilities = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Recommended for you</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {facilities.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 bg-cover bg-center rounded-xl shadow-lg text-white overflow-hidden"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="flex flex-col justify-end h-96 p-6 bg-black/40">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <h4 className="text-lg">{item.city}</h4>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;

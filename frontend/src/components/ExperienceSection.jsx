// import React from "react";
// import { Link } from "react-router-dom";

// // Optional fallback if image path is missing or invalid
// const fallbackImage = "https://via.placeholder.com/400x300?text=Image+Unavailable";

// const ExperienceSection = ({ data }) => {
//   if (!data || !data.cityName) return null;

//   const { hotel, restaurant, speciality, thingsToExplore, cityName } = data;

//   const boxes = [
//     {
//       title: "Hotels",
//       desc: `Find the best stay in ${cityName}.`,
//       image: hotel?.image ? `/city_image/${cityName.toLowerCase()}/${getImageFileName(hotel.image)}` : fallbackImage,
//     },
//     {
//       title: "Restaurants",
//       desc: `Taste the best food in ${cityName}.`,
//       image: restaurant?.image ? `/city_image/${cityName.toLowerCase()}/${getImageFileName(restaurant.image)}` : fallbackImage,
//     },
//     {
//       title: "Speciality",
//       desc: `Explore what makes ${cityName} unique.`,
//       image: speciality?.image ? `/city_image/${cityName.toLowerCase()}/${getImageFileName(speciality.image)}` : fallbackImage,
//     },
//     {
//       title: "Things to Explore",
//       desc: `Discover exciting places in ${cityName}.`,
//       image: thingsToExplore?.image ? `/city_image/${cityName.toLowerCase()}/${getImageFileName(thingsToExplore.image)}` : fallbackImage,
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 mt-16">
//       <h1 className="text-3xl font-bold mb-8 text-center">
//         Enrich Your Experience With
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {boxes.map((box, index) => (
//           <div
//             key={index}
//             className="bg-cover bg-center h-80 rounded-xl shadow-lg text-white flex flex-col justify-end p-6"
//             style={{
//               backgroundImage: `url(${box.image})`,
//             }}
//           >
//             <h3 className="text-3xl font-bold mb-2">{box.title}</h3>
//             <p className="text-1xl mb-4">{box.desc}</p>
//             <Link
//                 to={`/city/${cityName}/${box.title.toLowerCase().replace(/\s+/g, '')}`}
//                 className="text-2xl underline text-blue-300 hover:text-white"
//               >
//                 Explore Now
//               </Link>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Helper to extract the filename from the full image path stored in DB
// function getImageFileName(fullPath) {
//   if (!fullPath) return "";
//   const parts = fullPath.split("/");
//   return parts[parts.length - 1]; // returns hotel.jpg, restaurant.jpg, etc.
// }

// export default ExperienceSection;


import React from "react";
import { Link } from "react-router-dom";

const fallbackImage = "https://via.placeholder.com/400x300?text=Image+Unavailable";

const ExperienceSection = ({ data }) => {
  if (!data || !data.cityName) return null;

  const { hotel, restaurant, speciality, thingsToExplore, cityName } = data;

  const boxes = [
    {
      title: "Hotels",
      desc: `Find the best stay in ${cityName}.`,
      image: hotel?.image ? `/city_image/${cityName.toLowerCase()}/${getImageFileName(hotel.image)}` : fallbackImage,
    },
    {
      title: "Restaurants",
      desc: `Taste the best food in ${cityName}.`,
      image: restaurant?.image ? `/city_image/${cityName.toLowerCase()}/${getImageFileName(restaurant.image)}` : fallbackImage,
    },
    {
      title: "Speciality",
      desc: `Explore what makes ${cityName} unique.`,
      image: speciality?.image ? `/city_image/${cityName.toLowerCase()}/${getImageFileName(speciality.image)}` : fallbackImage,
    },
    {
      title: "Tourist Places",
      desc: `Discover exciting places in ${cityName}.`,
      image: thingsToExplore?.image ? `/city_image/${cityName.toLowerCase()}/${getImageFileName(thingsToExplore.image)}` : fallbackImage,
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-16">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Enrich Your Experience With
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-cover bg-center h-80 rounded-xl shadow-lg text-white flex flex-col justify-end p-6 transform transition duration-300 hover:scale-105 cursor-pointer"
            style={{
              backgroundImage: `url(${box.image})`,
            }}
          >
            <h3 className="text-3xl font-bold mb-2">{box.title}</h3>
            <p className="text-lg mb-4">{box.desc}</p>
            <Link
              to={
                box.title === "Speciality"
                  ? `/city/${cityName}/speciality`
                  : box.title === "Things to Explore"
                  ? `/city/${cityName}/touristplaces`
                  : `/city/${cityName}/${box.title.toLowerCase().replace(/\s+/g, '')}`
              }
              className="text-xl underline text-blue-300 hover:text-white"
            >
              Explore Now
            </Link>


          </div>
        ))}
      </div>
    </div>
  );
};

function getImageFileName(fullPath) {
  if (!fullPath) return "";
  const parts = fullPath.split("/");
  return parts[parts.length - 1];
}

export default ExperienceSection;

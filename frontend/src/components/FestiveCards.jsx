import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightCircle } from "lucide-react";

const FestiveCards = ({ festivals }) => {
  const navigate = useNavigate();

  if (!festivals || festivals.length === 0)
    return <div className="text-center py-6">No festivals available.</div>;

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Witness the Festive Seasons
      </h1>

      <div className="flex flex-col md:flex-row gap-6 relative">
        {festivals.slice(0, 3).map((item, index) => {
          const fileName = item.image?.split("/").pop(); // e.g., 'festival1.jpg'
          const imagePath = `/city_image/${item.city.toLowerCase()}/${fileName}`;

          return (
            <div
              key={index}
              className="relative w-full md:w-1/3 bg-cover bg-center rounded-xl shadow-lg text-white overflow-hidden"
              style={{ backgroundImage: `url(${imagePath})` }}
            >
              {/* Floating Arrow for the 3rd card */}
              {index === 2 && (
                <div className="absolute top-1/2 right-[10px] transform -translate-y-1/2 z-20">
                  <button
                    onClick={() =>
                      navigate(`/festivals/${item.city.toLowerCase()}`)
                    }
                    className=" rounded-full p-2 shadow-lg hover:scale-110 transition"
                    title="Explore all festivals"
                  >
                    <ChevronRightCircle className="text-white w-16 h-16" />
                  </button>
                </div>
              )}

              <div className="flex flex-col justify-end h-96 p-6 bg-black/40">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <h4 className="text-lg">{item.city}</h4>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FestiveCards;

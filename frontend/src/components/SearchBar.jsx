// import { useState } from "react";
// import React from "react";

// const SearchBar = () => {
//   const [searchText, setSearchText] = useState("");

//   const handleSearch = () => {
//     if (searchText.trim()) {
//       alert(`Searching for: ${searchText}`); // We'll later route to the city page
//     }
//   };

//   return (
//     <div className="flex w-full max-w-md">
//       <input
//         type="text"
//         value={searchText}
//         onChange={(e) => setSearchText(e.target.value)}
//         placeholder="Search for a city..."
//         className="w-full px-4 py-2 rounded-l-lg text-black focus:outline-none"
//       />
//       <button
//         onClick={handleSearch}
//         className="bg-yellow-400 text-black px-4 py-2 rounded-r-lg hover:bg-yellow-300 transition"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/city/${searchText.toLowerCase()}`);
      setSearchText(""); // optional: clear input after search
    }
  };

  return (
    <div className="flex w-full max-w-md">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for a city..."
        className="w-full px-4 py-2 rounded-l-lg text-black focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-400 text-black px-4 py-2 rounded-r-lg hover:bg-yellow-300 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

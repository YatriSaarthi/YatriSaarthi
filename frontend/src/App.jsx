import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";
import HotelList from "./components/HotelList";
import RestaurantList from "./components/RestaurantList";
import FestivalExplorer from "./components/FestivalExplorer";
import TouristPlaces from "./pages/TouristPlaces";
import Speciality from "./pages/Speciality"; 
import BookingForm from "./components/BookingForm";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // ✅ Import CSS once
import Navbar from "./components/Navbar";
import About from "./pages/About"; // adjust the path based on your folder structure
import LandingPage from "./pages/LandingPage"; // adjust the path based on your folder structure


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/city/:cityName" element={<CityPage />} />
          <Route path="/city/:cityName/hotels" element={<HotelList />} /> 
          <Route path="/city/:cityName/restaurants" element={<RestaurantList />} />
          <Route path="/festivals/:cityName" element={<FestivalExplorer />} />
          <Route path="/city/:cityName/speciality" element={<Speciality />} />
          <Route path="/city/:cityName/touristplaces" element={<TouristPlaces />} />

          {/* ✅ Booking Form route */}
          <Route path="/book" element={<BookingForm />} />
        </Routes>

        {/* ✅ ToastContainer globally available */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
// import Home from "./pages/Home";
// import React from "react";

// function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import FestiveCards from "../components/FestiveCards";
import GuideSection from "../components/GuideSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ExperienceSection from "../components/ExperienceSection";

function CityPage() {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch(`/api/cities/${cityName}`);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        setCityData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching city data:", error);
        setLoading(false);
      }
    };

    fetchCityData();
  }, [cityName]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!cityData) return <div className="text-center py-10 text-red-500">City not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <Slider city={cityData.cityName} />
      <FestiveCards festivals={cityData.festivals} />

      <ExperienceSection data={cityData} />

      <GuideSection city={cityData.cityName} />
      <FAQ faqs={cityData.faqs} />
      <Footer />
    </div>
  );
}

export default CityPage;

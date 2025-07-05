import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import CityCard from "../components/CityCard";
import ThemeCard from "../components/ThemeCard";
import React from "react";
import {
  FaUmbrellaBeach,
  FaMapMarkedAlt,
  FaUtensils,
  FaLandmark,
  FaMountain,
  FaCheckCircle,
  FaMapSigns,
  FaUserShield,
  FaGlobeAsia,
} from "react-icons/fa";
import { MdCelebration } from "react-icons/md";
import WhyUsCard from "../components/WhyUsCard";
import FeaturedFestival from "../components/FeaturedFestival";
import GuideCard from "../components/GuideCard";
import PlanTourCTA from "../components/PlanTourCTA";
import Testimonials from "../components/Testimonials";
import SocialGallery from "../components/SocialGallery";
import FAQ from "../components/FAQhome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const trendingCities = [
  {
    cityName: "Jaipur",
    image: "jaipur.jpg",
    tagline: "The Pink City of India",
  },
  {
    cityName: "Kolkata",
    image: "kolkata.jpg",
    tagline: "The Cultural Capital of India",
  },
  {
    cityName: "Delhi",
    image: "delhi.jpg",
    tagline: "Heart of the Nation",
  },
  {
    cityName: "Bangalore",
    image: "bangalore.jpg",
    tagline: "The Silicon Valley of India",
  },
];

const themes = [
  {
    title: "Festivals & Events",
    icon: <MdCelebration />,
    bgColor: "bg-orange-500",
  },
  {
    title: "Food & Restaurants",
    icon: <FaUtensils />,
    bgColor: "bg-red-500",
  },
  {
    title: "Nature & Adventure",
    icon: <FaMountain />,
    bgColor: "bg-green-600",
  },
  {
    title: "Heritage & Architecture",
    icon: <FaLandmark />,
    bgColor: "bg-yellow-600",
  },
  {
    title: "Tourist Places",
    icon: <FaMapMarkedAlt />,
    bgColor: "bg-blue-600",
  },
  {
    title: "Nearby Escapes",
    icon: <FaUmbrellaBeach />,
    bgColor: "bg-purple-600",
  },
];

const guides = [
  {
    name: "Rohit Sharma",
    city: "Agra",
    expertise: "Heritage & Monument Walks",
    image: "/guides/rohit.jpg",
  },
  {
    name: "Sneha Nair",
    city: "Kochi",
    expertise: "Cultural + Food Trails",
    image: "/guides/sneha.jpg",
  },
  {
    name: "Dev Mehta",
    city: "Ahmedabad",
    expertise: "Navratri & Festival Tours",
    image: "/guides/dev.jpg",
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <SectionTitle
        title="Trending Cities"
        subtitle="Explore the most visited cities this season"
      />

      <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
        {trendingCities.map((city) => (
          <CityCard key={city.cityName} {...city} />
        ))}
      </div>

      <SectionTitle
        title="Explore by Theme"
        subtitle="Discover experiences across categories"
      />

      <div className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mb-16">
        {themes.map((item) => (
          <ThemeCard key={item.title} {...item} />
        ))}
      </div>

      <SectionTitle
        title="Why Choose YatriSaarthi?"
        subtitle="What makes us different from other travel platforms?"
      />

      <div className="max-w-6xl mx-auto px-4 mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4 mb-16">
        <WhyUsCard
          icon={<FaCheckCircle />}
          title="Verified Content"
          description="All cities, festivals, and guides are manually verified for authenticity."
        />
        <WhyUsCard
          icon={<FaMapSigns />}
          title="Local Insights"
          description="Get real local tips and hidden gems from city-specific guides and travelers."
        />
        <WhyUsCard
          icon={<FaUserShield />}
          title="Trusted Guides"
          description="All guides are identity-verified and reviewed by users for your safety."
        />
        <WhyUsCard
          icon={<FaGlobeAsia />}
          title="All-India Coverage"
          description="Explore every corner of India — from big cities to lesser-known gems."
        />
      </div>

      <FeaturedFestival />

      <SectionTitle
        title="Verified Local Guides"
        subtitle="Connect with passionate travel guides from across India"
      />

      <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-16">
        {guides.map((guide) => (
          <GuideCard key={guide.name} {...guide} />
        ))}
      </div>

      <PlanTourCTA />
      <Testimonials />
      <SocialGallery />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;

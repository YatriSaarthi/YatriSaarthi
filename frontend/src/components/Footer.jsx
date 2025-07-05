import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h5 className="text-lg font-semibold mb-2">About Us</h5>
            <p className="text-sm">
              We are a travel website dedicated to helping you explore new
              destinations and make the most of your journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Destinations</a></li>
              <li><a href="#" className="hover:text-gray-300">Travel Planner</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
            <p className="text-sm">
              📧 Email: info@travelwebsite.com
              <br />
              📞 Phone: +1 234 567 890
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 text-sm text-gray-400">
          &copy; 2024 Travel Website. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

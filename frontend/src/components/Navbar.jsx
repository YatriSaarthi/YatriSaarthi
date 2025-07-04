import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Contact"];

  return (
    <nav className="fixed w-full z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-blue-600">
          Yatri<span className="text-white">Saarthi</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-blue-300 cursor-pointer transition"
            >
              {link === "About" ? (
                <Link to="/about">{link}</Link>
              ) : (
                link
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-xl cursor-pointer text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black bg-opacity-80 px-4 pb-4 space-y-3 text-gray-100 font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-blue-300 cursor-pointer transition"
              onClick={() => setIsOpen(false)} // closes menu on click
            >
              {link === "About" ? (
                <Link to="/about">{link}</Link>
              ) : (
                link
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

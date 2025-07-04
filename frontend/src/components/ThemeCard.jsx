import { motion } from "framer-motion";
import React from "react";

const ThemeCard = ({ title, icon, bgColor }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-xl shadow-md text-white ${bgColor} cursor-pointer transition`}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </motion.div>
  );
};

export default ThemeCard;

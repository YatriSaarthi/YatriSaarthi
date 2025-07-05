import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import Festival from "../models/Festival.js";
import FestivalCity from "../models/FestivalCity.js"; // 🧠 use correct city model

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/:city", async (req, res) => {
  try {
    const cityName = req.params.city.trim();
    console.log("🔍 Searching for city:", cityName);

    const city = await FestivalCity.findOne({ city: new RegExp(`^${cityName}$`, "i") });
    if (!city) return res.status(404).json({ message: "City not found" });

    const state = city.state;
    const formattedState = state.replace(/\s+/g, "_");

    const festivalsRaw = await Festival.find({ state });
    
    const festivalsMap = new Map();
    festivalsRaw.forEach((f) => {
      if (!festivalsMap.has(f.festival_name)) {
        festivalsMap.set(f.festival_name, f);
      }
    });

    const festivals = Array.from(festivalsMap.values());
    const imageFolderPath = path.join(
      __dirname,
      "..",
      "..",
      "frontend",
      "public",
      "festival_image",
      formattedState
    );

    let images = [];
    if (fs.existsSync(imageFolderPath)) {
      images = fs.readdirSync(imageFolderPath)
        .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
        .map(file => `/festival_image/${formattedState}/${file}`);
    }

    res.json({
      city: city.city,
      state,
      festivals,
      images
    });

  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;


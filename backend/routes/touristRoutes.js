import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import TouristPlace from "../models/touristPlace.js";

const router = express.Router();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city.trim();
    
    // Case-insensitive city match
    const places = await TouristPlace.find({
      city: { $regex: new RegExp(`^${city}$`, "i") },
    });

    const formattedCity = city.replace(/\s+/g, "_"); // In case folders are like 'New_Delhi'
    const imageDir = path.join(__dirname, "..", "..", "frontend", "public", "city_iamge", formattedCity);

    let images = [];

    if (fs.existsSync(imageDir)) {
      images = fs.readdirSync(imageDir)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .map(file => `/city_image/${formattedCity}/${file}`);
    }

    res.json({ places, images });
  } catch (err) {
    console.error("❌ Error in /api/tourist-places/:city", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;

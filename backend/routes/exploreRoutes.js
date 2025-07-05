import express from "express";
import Explore from "../models/Explore.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const router = express.Router();

// __dirname workaround in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city.trim();
    console.log("👉 Requested city from frontend:", city);

    // Fetch from DB (case-insensitive exact match)
    const explore = await Explore.findOne({ city: new RegExp(`^${city}$`, "i") });

    if (!explore) {
      console.log("❌ No explore data found for:", city);
      
      // Show all cities in DB for debugging
      const all = await Explore.find();
      console.log("🧾 Available cities in DB:", all.map(item => item.city));
      
      return res.status(404).json({ message: "No explore data found" });
    }

    console.log("✅ Found explore data for:", explore.city);

    const formattedCity = city.replace(/\s+/g, "_");
    const folder = path.join(
      __dirname,
      "..",
      "..",
      "frontend",
      "public",
      "speciality_image",
      formattedCity
    );


    console.log("📂 Looking for images in:", folder);

    let images = [];

    if (fs.existsSync(folder)) {
      const allFiles = fs.readdirSync(folder);
      console.log("📄 Found files:", allFiles);

      images = allFiles
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .map(file => `/speciality_image/${formattedCity}/${encodeURIComponent(file)}`);

      console.log("✔️ Filtered image paths:", images);
    } else {
      console.log("❌ Folder does NOT exist:", folder);
    }

    res.json({
      city: explore.city,
      spots: explore.spots,
      images
    });

  } catch (err) {
    console.error("❌ Error in /api/explore:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

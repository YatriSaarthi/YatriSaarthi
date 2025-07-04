import City from "../models/City.js";

export const getAllCities = async (req, res) => {
  const cities = await City.find(); // This reads from 'city' collection
  res.json(cities);
};

// routes/cityController.js
export const getCityByName = async (req, res) => {
  try {
    const city = await City.findOne({ cityName: { $regex: `^${req.params.name}$`, $options: 'i' } });
    if (!city) return res.status(404).json({ message: "City not found" });
    res.json(city);
  } catch (err) {
    res.status(500).json({ message: "Error fetching city" });
  }
};


// controllers/hotelController.js
import Hotel from '../models/Hotel.js';

export const getHotelsByCity = async (req, res) => {
  const city = req.params.city?.trim();
  console.log('Requested City:', city); // Debugging log

  try {
    const hotels = await Hotel.find({
    City: { $regex: `^${city}$`, $options: 'i' }  // Case-insensitive exact match
    });

    console.log('Hotels found:', hotels.length); // See how many are found
    res.json(hotels);
  } catch (err) {
    console.error('Error fetching hotels:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

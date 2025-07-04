import Restaurant from '../models/Restaurant.js';

export const getRestaurantsByCity = async (req, res) => {
  const city = req.params.city?.trim();
  console.log("Searched city:", city); // for debugging

  try {
    const restaurants = await Restaurant.find({
      City: { $regex: new RegExp(`^${city}$`, 'i') } // Case-insensitive full match
    });
    // const all = await Restaurant.find({});
    // console.log("Sample city from DB:", all[0]?.City);

    // const restaurants = await Restaurant.find({});


    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


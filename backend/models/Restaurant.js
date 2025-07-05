import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  Name: String,
  Location: String,
  City: String,
  Cuisine: String,
  Rating: Number
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;

import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  City: String,
  Category: String,
  HotelName: String,
  Address: String,
  TotalRooms: Number,
});

export default mongoose.model('Hotel', hotelSchema);

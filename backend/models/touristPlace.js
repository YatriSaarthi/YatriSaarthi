import mongoose from "mongoose";
import festivalConnection from "../db/festivalDB.js"; 
const touristPlaceSchema = new mongoose.Schema({
  name: String,
  city: String,
  state: String,
  zone: String,
  type: String,
  establishmentYear: Number,
  timeToVisitHrs: Number,
  googleRating: Number,
  entranceFee: Number,
  airportNearby: String,
  weeklyOff: String,
  significance: String,
  dslrAllowed: String,
  numberOfReviews: Number,
  bestTimeToVisit: String
});

// ✅ Use friend's DB connection
const TouristPlace = festivalConnection.model("TouristPlace", touristPlaceSchema, "touristplaces");

export default TouristPlace;

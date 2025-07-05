import festivalConnection from "../db/festivalDB.js";
import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  city: String,
  state: String,
});
const FestivalCity = festivalConnection.model("City", citySchema, "cities");
export default FestivalCity;

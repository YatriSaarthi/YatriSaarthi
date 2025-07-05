import festivalConnection from "../db/festivalDB.js";
import mongoose from "mongoose";

const festivalSchema = new mongoose.Schema({
  festival_name: String,
  city: String,
  state: String,
  month: String,
  locations: [String],
  description: String,
  highlights: [String],
  image_url: String,
  weather: String,
  safety_tips: String,
  upcoming_date: String,
});

const Festival = festivalConnection.model("Festival", festivalSchema, "festivals");
export default Festival;

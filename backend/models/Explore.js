import festivalConnection from "../db/festivalDB.js";
import mongoose from "mongoose";

const exploreSchema = new mongoose.Schema({
  city: String,
  spots: [
    {
      name: String,
      description: String
    }
  ]
});

// 👇 Use festivalConnection instead of mongoose.model()
const Explore = festivalConnection.model("Explore", exploreSchema);
export default Explore;

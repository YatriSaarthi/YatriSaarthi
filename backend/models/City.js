import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  cityName: String,
  state: { type: String, required: false },
  slider: [String],
  festivals: [
    {
      name: String,
      description: String,
      city: String,
      image: String
    }
  ],
  hotel: {
    image: String,
    city: String
  },
  restaurant: {
    image: String,
    city: String
  },
  speciality: {
    image: String,
    city: String
  },
  thingsToExplore: {
    image: String,
    city: String
  },
  faqs: [
    {
      question: String,
      answer: String
    }
  ]
});

const City = mongoose.model("City", citySchema, "city");

export default City;

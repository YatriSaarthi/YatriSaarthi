import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  members: { type: Number, required: true },
  vehicle: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  duration: { type: String, required: true },
  pickup: { type: String, required: true },
  travelType: { type: String, required: true },
  language: { type: String },
  budget: { type: Number },
  guideGender: { type: String },
  additional: { type: String },
  helpPlan: { type: Boolean, default: false },
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;

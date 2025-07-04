import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// @route   POST /api/bookings
// @desc    Create new booking
// @access  Public
router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: "Booking created successfully!", data: savedBooking });
  } catch (error) {
    console.error("Booking creation failed:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;

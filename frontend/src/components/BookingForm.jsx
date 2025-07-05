import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
    UserIcon,
    PhoneIcon,
    EnvelopeIcon,
    UsersIcon,
    CalendarDaysIcon,
    ClockIcon,
    MapPinIcon,
    CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";


const BookingForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        members: "",
        vehicle: "",
        date: "",
        time: "",
        duration: "",
        pickup: "",
        travelType: "",
        language: "",
        budget: "",
        guideGender: "",
        additional: "",
        helpPlan: false,
    });

    const [budgetError, setBudgetError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;

        if (name === "budget" && Number(val) < 1500) {
            setBudgetError("❌ Not applicable, minimum budget is ₹1500");
        } else {
            setBudgetError("");
        }

        setFormData({
            ...formData,
            [name]: val,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/bookings", formData);
            toast.success("✅ Booking submitted successfully!");
            console.log(response.data);
            // Reset form
            setFormData({
                fullName: "",
                phone: "",
                email: "",
                members: "",
                vehicle: "",
                date: "",
                time: "",
                duration: "",
                pickup: "",
                travelType: "",
                language: "",
                budget: "",
                guideGender: "",
                additional: "",
                helpPlan: false,
            });
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("❌ Failed to submit booking. Try again!");
        }
    };



    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-xl mt-6">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-700">Book Your Guide</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="flex items-center border rounded px-3 py-2">
                    <UserIcon className="h-3 w-3 text-gray-400 mr-2" />
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full focus:outline-none"
                        required
                    />
                </div>

                {/* Phone */}
                <div className="flex items-center border rounded px-3 py-2">
                    <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full focus:outline-none"
                        required
                    />
                </div>

                {/* Email */}
                <div className="flex items-center border rounded px-3 py-2">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full focus:outline-none"
                    />
                </div>

                {/* Members */}
                <div className="flex items-center border rounded px-3 py-2">
                    <UsersIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                        type="number"
                        name="members"
                        placeholder="Number of Members"
                        value={formData.members}
                        onChange={handleChange}
                        min="1" // ✅ Minimum value 1
                        className="w-full focus:outline-none"
                        required
                    />
                </div>


                {/* Vehicle */}
                <div className="border rounded px-3 py-2">
                    <label className="text-gray-600">Vehicle Requirement</label>
                    <select
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        className="w-full focus:outline-none"
                        required
                    >
                        <option value="">Select</option>
                        <option value="None">None</option>
                        <option value="Bike">Bike</option>
                        <option value="Rickshaw">Rickshaw</option>
                        <option value="Car">Car</option>
                        <option value="SUV">SUV</option>
                        <option value="Traveller">Traveller</option>
                        <option value="Bus">Bus</option>
                    </select>
                </div>


                {/* Date */}
                <div className="flex items-center border rounded px-3 py-2">
                    <CalendarDaysIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full focus:outline-none"
                        required
                    />
                </div>

                {/* Time */}
                <div className="flex items-center border rounded px-3 py-2">
                    <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full focus:outline-none"
                        required
                    />
                </div>

                {/* Duration */}
                <div className="border rounded px-3 py-2">
                    <label className="text-gray-600">Duration</label>
                    <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full focus:outline-none"
                        required
                    >
                        <option value="">Select</option>
                        <option value="Half Day">Half Day</option>
                        <option value="Full Day">Full Day</option>
                        <option value="2 Days">2 Days</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>

                {/* Pickup Location */}
                <div className="flex items-center border rounded px-3 py-2">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                        type="text"
                        name="pickup"
                        placeholder="Pickup Location"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="w-full focus:outline-none"
                        required
                    />
                </div>

                {/* Travel Type */}
                <div className="border rounded px-3 py-2">
                    <label className="text-gray-600">Travel Type</label>
                    <select
                        name="travelType"
                        value={formData.travelType}
                        onChange={handleChange}
                        className="w-full focus:outline-none"
                        required
                    >
                        <option value="">Select</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Religious">Religious</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Nature">Nature</option>
                        <option value="Leisure">Leisure</option>
                    </select>
                </div>

                {/* Budget */}
                <div className="flex flex-col border rounded px-3 py-2">
                    <div className="flex items-center">
                        <CurrencyRupeeIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <input
                            type="number"
                            name="budget"
                            placeholder="Budget (Total or per person)"
                            value={formData.budget}
                            onChange={handleChange}
                            min="1500"
                            className="w-full focus:outline-none"
                            required
                        />
                    </div>
                    {budgetError && (
                        <span className="text-red-500 text-sm mt-1">{budgetError}</span>
                    )}
                </div>




                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/restaurantRoutes.js';
import hotelRoutes from './routes/hotelRoutes.js';
import cityRoutes from './routes/cityRoutes.js';
import festivalRoutes from './routes/FestivalRoutes.js';
import touristRoutes from './routes/touristRoutes.js';
import exploreRoutes from './routes/exploreRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bookingRoutes from './routes/bookingRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to main DB (Simran)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to Simran DB');
}).catch(err => {
  console.error('❌ Error connecting to Simran DB:', err);
});


// Routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/festivals', festivalRoutes);
app.use('/api/tourist', touristRoutes);
app.use('/api/explore', exploreRoutes);
app.use("/api/bookings", bookingRoutes);

// Static folders
app.use('/festival_image', express.static(path.join(__dirname, '..', 'frontend', 'public', 'festival_image')));
app.use('/touristplaces_image', express.static(path.join(__dirname, '..', 'frontend', 'public', 'touristplaces_image')));
app.use('/speciality', express.static(path.join(__dirname, '..', 'frontend', 'public', 'speciality_image')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

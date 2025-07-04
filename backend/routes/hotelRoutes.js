import express from 'express';
import { getHotelsByCity } from '../controllers/hotelController.js';

const router = express.Router();

router.get('/:city', getHotelsByCity);

export default router;

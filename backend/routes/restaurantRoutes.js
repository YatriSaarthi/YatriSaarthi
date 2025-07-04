import express from 'express';
import { getRestaurantsByCity } from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/:city', getRestaurantsByCity);

export default router;

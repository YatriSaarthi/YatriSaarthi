import express from "express";
import { getAllCities, getCityByName } from "../controllers/cityController.js";

const router = express.Router();

router.get("/", getAllCities);
router.get("/:name", getCityByName);

export default router;

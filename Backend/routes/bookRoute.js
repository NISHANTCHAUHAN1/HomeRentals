import express, { Router } from "express";
import { createBooking } from "../controller/bookingController.js";

const router = express.Router();

router.post("/create", createBooking);

export default router;
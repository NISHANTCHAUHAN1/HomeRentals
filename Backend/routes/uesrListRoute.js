import express from "express";
import { getTripList } from "../controller/userController.js";

const router = express.Router();

router.get("/:userId/trips", getTripList)

export default router;
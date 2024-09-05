import express from "express";
import { addListingInWishList, getPropertyList, getReservationList, getTripList } from "../controller/userController.js";

const router = express.Router();

router.get("/:userId/trips", getTripList);
router.patch("/:userId/:listingId", addListingInWishList);
router.get("/:userId/properties", getPropertyList);
router.get("/:userId/reservations", getReservationList);

export default router;
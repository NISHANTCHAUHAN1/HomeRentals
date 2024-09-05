import express from "express";
import { addListingInWishList, getPropertyList, getTripList } from "../controller/userController.js";

const router = express.Router();

router.get("/:userId/trips", getTripList);
router.patch("/:userId/:listingId", addListingInWishList);
router.get("/:userId/properties", getPropertyList);

export default router;
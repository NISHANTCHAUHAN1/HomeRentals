import express from "express";
import { addListingInWishList, getTripList } from "../controller/userController.js";

const router = express.Router();

router.get("/:userId/trips", getTripList);
router.patch("/:userId/:listingId", addListingInWishList);

export default router;
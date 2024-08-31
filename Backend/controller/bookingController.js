import Booking from "../models/bookingModel.js";
import TryCatch from "../utils/TryCatch.js";

export const createBooking = TryCatch(async(req,res) => {
    const {customerId, hostId, listingId, startDate, endDate, totalPrice} = req.body;

    const newBooking = new Booking({
        customerId, hostId, listingId, startDate, endDate, totalPrice
    });

    await newBooking.save();
    res.status(200).json({newBooking, message: "Booked Successfully"});
})
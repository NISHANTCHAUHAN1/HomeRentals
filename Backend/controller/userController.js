import Booking from "../models/bookingModel.js";
import TryCatch from "../utils/TryCatch.js";

export const getTripList = TryCatch(async(req,res) => {
    const {userId} = req.params;

    const trips = await Booking.find({customerId: userId}).populate("customerId hostId listingId");
    if(!trips) return res.status(400).json({message: "Booking Not Found"});

    res.status(200).json(trips);
})
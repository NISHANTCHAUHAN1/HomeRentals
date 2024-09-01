import Booking from "../models/bookingModel.js";
import User from "../models/userModel.js";
import TryCatch from "../utils/TryCatch.js";

export const createBooking = TryCatch(async(req,res) => {
    const {customerId, hostId, listingId, startDate, endDate, totalPrice} = req.body;

    // const user = await User.findOne({email});
    // if(user === hostId) return res.status(400).json({message: "You can not Book's your Room's"})

    const newBooking = new Booking({
        customerId, hostId, listingId, startDate, endDate, totalPrice
    });

    await newBooking.save();
    res.status(200).json({newBooking, message: "Booked Successfully"});
})
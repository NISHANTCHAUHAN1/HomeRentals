import Booking from "../models/bookingModel.js";
import Listing from "../models/listing.model.js";
import User from "../models/userModel.js";
import TryCatch from "../utils/TryCatch.js";

export const getTripList = TryCatch(async(req,res) => {
    const {userId} = req.params;

    const trips = await Booking.find({customerId: userId}).populate("customerId hostId listingId");
    if(!trips) return res.status(400).json({message: "Booking Not Found"});

    res.status(200).json(trips);
})

export const addListingInWishList = TryCatch(async(req,res) => {
    const { userId, listingId } = req.params

    const user = await User.findById(userId);
    if(!user) return res.status(400).json({message: "User Not Found"});

    const listing = await Listing.findById(listingId).populate("creator")
    if(!listing) return res.status(400).json({message: "Listing Not Found"});

    const favListing = user.wishList.find((item) => item._id.toString() === listingId);

    if (favListing) {
      user.wishList = user.wishList.filter((item) => item._id.toString() !== listingId)

      await user.save()
      res.status(200).json({message: "Removed From Wishlist",wishList: user.wishList,})
    } else {
      user.wishList.push(listing)
      await user.save()
      res.status(200).json({message: "Added To Wishlist",wishList: user.wishList,})
    }
});
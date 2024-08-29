import Listing from "../models/listing.model.js";
import TryCatch from "../utils/TryCatch.js";
export const createListing = TryCatch(async (req, res) => {
  const {
    creator,
    category,
    type,
    streetAddress,
    aptSuite,
    city,
    state,
    country,
    guestCount,
    bedroomCount,
    bedCount,
    bathroomCount,
    amenities,
    title,
    description,
    price,
  } = req.body;

  const listingPhotos = req.files;

  if (!listingPhotos)
    return res.status(400).json({ message: "No file uploaded" });

  const listingPhotoPaths = listingPhotos.map((file) => file.path);

  const newListing = new Listing({
    creator,
    category,
    type,
    streetAddress,
    aptSuite,
    city,
    state,
    country,
    guestCount,
    bedroomCount,
    bedCount,
    bathroomCount,
    amenities,
    listingPhotoPaths,
    title,
    description,
    price,
  });

  await newListing.save();

  res.status(201).json({newListing});
});

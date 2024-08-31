import express from "express"
import multer from "multer"
import {
  createListing,
  getListings,
} from "../controller/listingController.js"

// multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage })

const router = express.Router()

router.post("/create", upload.array("listingPhotos"), createListing)
router.get("/", getListings)


export default router

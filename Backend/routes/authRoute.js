import express from "express"
import multer from "multer"
import { login, logout, register } from "../controller/authController.js"
// import { login, register } from "../controller/auth.controller.js"

const router = express.Router()

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

router.post("/register", upload.single("profileImage"), register)
router.post("/login", login)
router.get("/logout", logout);

export default router

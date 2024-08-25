import User from "../models/userModel.js";
import TryCatch from "../utils/TryCatch.js";
import bcrypt from "bcrypt";

export const register = TryCatch(async (req,res) => {
    const {name, email, password } = req.body;
    const profileImage = req.file;

    if(!profileImage) return res.status(400).json({mesage: "No file upload"});
    const profileImagePath = profileImage.path;

    let user = await User.findOne({email});
    if(user) return res.status(400).json({message: "Already have an account with this email"});

    const hashPassword = await bcrypt.hash(password, 10);

    user = await User.create({
        name, email, password: hashPassword, profileImagePath
    });

    res.status(201).json({user, message: "User Registered"})
});
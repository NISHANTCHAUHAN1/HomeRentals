import generateToken from "../utils/generateToken.js";
import TryCatch from "../utils/TryCatch.js";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

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

    res.status(201).json({user, message: "User Registered"});
});



export const login = TryCatch(async(req,res) => {
    const { email, password} = req.body;

    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({message: "Incorrect email or password"});

    const comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword) return res.status(400).json({message: "Wrong Password"});
    
    generateToken(user._id, res);
    
    res.status(200).json({user, message: "Login Succesfully"});
});


export const logout = async(_,res) => {
    try {
        return res.cookie("token", "", {maxAge: 0}).json({message: "logged Out successfuly"});
    } catch (error) {
        res.status(500).json({message: "Invaild server error"});
    }
}
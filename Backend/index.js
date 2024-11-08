import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/db.js';
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

const app = express();

const __dirname = path.resolve();
// console.log(__dirname);



app.use(express.json());
// app.use(cors());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(cookieParser()); 

import userRoute from "./routes/authRoute.js";
import listingRoute from "./routes/listingRoute.js";
import bookRoute from "./routes/bookRoute.js";
import userListRoute from "./routes/uesrListRoute.js"

app.use("/api/user", userRoute);
app.use("/api/listing", listingRoute);
app.use("/api/booking", bookRoute);
app.use("/api/userlist", userListRoute);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDB();
})
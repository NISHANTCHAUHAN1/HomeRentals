import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/db.js';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

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

app.use("/api/user", userRoute);


const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDB();
})
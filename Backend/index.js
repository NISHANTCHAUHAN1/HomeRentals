import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/db.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

import userRoute from "./routes/authRoute.js";

app.use("/api/user", userRoute);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDB();
})
// // const express = require('express') // old way

import express from "express"; // helps to  build web server easily
import mongoose from "mongoose";
import cookieparser from "cookie-parser"; // helps us to work with cookies, small ieces of data a websites stores on computer
import cors from "cors"; // cors is like security gaurd, it helps to decides diferent website to talk each other
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
// import userRoute from "./routes/user.route.js";

dotenv.config({}); // Load environment variables from .env file

const app = express(); // our web server

// // middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

const corsOptions = {
  origin: "https://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8000;

//apis
app.use("/api/v1/user", userRoute);

// ("http://localhost:8000/api/v1/user/register");
// ("http://localhost:8000/api/v1/user/login");
// ("http://localhost:8000/api/v1/user/profile/update");

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});

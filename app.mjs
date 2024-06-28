import express from 'express';
import mongoose from 'mongoose';
// Import connectDb function
import {connectDb} from './db/conn.mjs';
import usersRoute from './routes/users.mjs'

import dotenv from 'dotenv';
dotenv.config();

await connectDb()
// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// routes

app.use('/users', usersRoute)

app.use('/', (req, res) => {
    res.send("Welcome to Movie Tracker")
})


app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });






// import express from "express";
// import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config();

// import connectDB from './db/conn.mjs'
// console.log(process.env.ATLAS_URI);
// const PORT = process.env.PORT || 3000
// const app = express()
// app.use(express.json());

// await mongoose.connect(); 
// connectDB()

// app.use('/', (req, res) => {
//     res.send("Welcome to Movie Tracker")
// })

// app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`)
// })
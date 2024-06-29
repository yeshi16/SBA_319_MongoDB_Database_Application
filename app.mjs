import express from 'express';
import mongoose from 'mongoose';
// Import connectDb function
import {connectDb} from './db/conn.mjs';
import usersRoute from './routes/users.mjs'
import movieRoute from './routes/movies.mjs'
import celebRoute from './routes/celebs.mjs'

import dotenv from 'dotenv';
dotenv.config();

await connectDb()
// Initialize Express app
const app = express();
const PORT = process.env.PORT || 1234;
app.use(express.json());

// routes

app.use('/users', usersRoute)
app.use('/movies', movieRoute)
app.use('/celebs', celebRoute)

app.use('/', (req, res) => {
    res.send("Welcome to Movie Tracker")
})


app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });


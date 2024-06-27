import express from 'express';
import mongoose from 'mongoose';
// Import connectDb function
import connectDb from './db/conn.mjs';
// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// Connect to MongoDB using Mongoose
const MONGODB_URI = "mongodb+srv://Meba:Myprovider2116!@mongopractice.qjekwdr.mongodb.net/?appName=MongoPractice" //process.env.ATLAS_URI 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event handling for MongoDB connection
db.once('open', () => {
  console.log('MongoDB connection successful');
  // Start Express server after successful MongoDB connection
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
// Async function to connect to additional database configurations (if any)
async function setupDb() {
  try {
    await connectDb(); // Call connectDb function
    console.log('Additional database configurations done');
  } catch (err) {
    console.error('Error setting up additional database configurations:', err);
  }
}
// Call setupDb function to perform additional database configurations
setupDb();


app.use('/', (req, res) => {
    res.send("Welcome to Movie Tracker")
})









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
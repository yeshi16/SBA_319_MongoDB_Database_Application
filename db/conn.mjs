
// const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoClient } from 'mongodb'
// import dotenv from 'dotenv';
// dotenv.config();

const uri = "mongodb+srv://Meba:Myprovider2116!@mongopractice.qjekwdr.mongodb.net/movie_tracker?appName=MongoPractice";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri); 
// const client = new MongoClient(process.env.ATLAS_URI)
let db;

// export async function connectDb() {
//   try {
//     // Connect the client to the server	
//     await client.connect();
//     // Send message successful connection
//    db = await client.db("movie_tracker");
//     console.log("connected to MongoDB");
//     return db
//   } catch(err){
//     console.log(err)
//   }
// }
// export function getDb() {
//   return db
// } 


// export default connectDb;



export const connectDb = async () => {
  await client.connect();
  db = client.db(); // you might specify the database name here
  console.log('Connected to MongoDB');
  return db;
};

export const getDb = () => {
  if (!db) {
      throw new Error('Database not initialized');
  }
  return db;
};





// import { MongoClient } from 'mongodb';
// const connectionString = process.env.ATLAS_URI || '';
// const client = new MongoClient(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// let db;
// async function connectDb() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');
//     db = client.db('movie_collection'); // Replace with your database name
//     return db;
//   } catch (err) {
//     console.error('Failed to connect to MongoDB Atlas', err);
//     throw err;
//   }
// }
// export default connectDb;






// // // const mongoose = require('mongoose')
// // import mongoose from 'mongoose';
// // import dotenv from "dotenv";
// // dotenv.config();

// // const client = process.env.ATLAS_URI

// // const connectDB = async () => {
// //     try{
// //         await mongoose.connect(client, {
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true,
// //         })
// //         console.log(`MongoDb connected on port ${process.env.PORT}`)
// //     } catch (err) {
// //         console.log(err)
// //     }

// // }

// // module.exports = connectDB



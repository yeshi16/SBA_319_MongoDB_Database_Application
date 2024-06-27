
// const { MongoClient, ServerApiVersion } = require('mongodb');
import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = "mongodb+srv://Meba:Myprovider2116!@mongopractice.qjekwdr.mongodb.net/?appName=MongoPractice";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDb() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
connectDb().catch(console.dir);

export default connectDb;









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



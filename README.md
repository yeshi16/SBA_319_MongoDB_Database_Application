# Movie Collection Tracker

## Description

The Movie Collection Tracker is a web pplication that allows users to manage a collection of movies. Users can add, view, and manage movies, genres, and user information. The application is built with Node.js, Express, and MongoDB, providing a robust backend to handle data storage and retrieval.


## Steps to Work on the Project

### Step 1: Create a .env File

Create a `.env` file in the root directory and add the conncection string from MongoDB and a PORT

### Step 2: Install Dependencies
in your shell install 
    "cors",
    "dotenv",
    "express",
    "mongodb",
    "mongoose",
    "nodemon"
    
### Step 3: run the application
in the termninal run nodemon app.mjs

## Project Structure

The rood directory contains models, route, public, .env, app.mjs and config folders/ files
Models
Defines the user, movie, and celeb models in the models directory.

Routes
Defines the routes for users, movies, and celebs in the routes directory and handle CRUD operations.

app.mjs to set up the Express application, connect to the database, and serve static files from the public directory.

Public 
Defines the HTML files for the user interface in the public directory.

DB
Defines the conn.mjs file that handles the conncection set up for MongoDb
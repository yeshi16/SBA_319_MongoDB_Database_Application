import express from 'express'
import {getDb} from '../db/conn.mjs'


const router = express.Router()

// all movies
router.get('/', async (req, res) => {
    try{
        const db = getDb()

        const movies = await db.collection('movies').find().toArray() 
        res.json(movies)
    } catch (err){
        console.log(err)
    }
})

// post new movie
router.post('/', async (req, res) => {
    try {
        const db = getDb();
        const { title, poster, discription, year, user } = req.body;
        const newMovie = await db.collection('movies').insertOne({ title, poster, discription, year, user });
        res.json(newMovie);
    } catch (error) {
        console.error('error creating new movie:', error);
    }
})
export default router
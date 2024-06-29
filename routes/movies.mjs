import express from 'express'
import {getDb} from '../db/conn.mjs'
import User from '../models/user.mjs'
import Movie from '../models/movie.mjs'

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
            const db = getDb()
            const { title, poster, discription, year, email, name } = req.body;

            const olduser = await db.collection('user').findOne({email})
            // const olduser = await User.findOne({email })
            let user
            if(!olduser){
                
                const newUser = await db.collection('users').insertOne({name, email})
                if (!email || !name) {
                    return res.json({ message: 'Email and name are required' });
                }else {
                console.log(`new user created`)
                }
                user = newUser.insertedId
                // await newUser.save()
                // return res.json({message: "new user created"})
            } else {
                user = olduser._id
            }
                       
            const movie = await db.collection('movies').insertOne({
                title, 
                poster, 
                discription, 
                year, 
                user });
            res.json(movie);
        } catch (error) {
            console.error('error creating new movie:', error);
        }
    })

export default router
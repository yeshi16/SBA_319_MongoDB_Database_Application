import express from 'express'
import { getDb } from './db.mjs';

const router = express.Router()

router.get('/', async (req, res) => {
    try{

        const {name, job, movies} = req.body

        const db = getDb()

         const celeb = await db.collection('celebrity').findOne({name})

         if(!celeb){
            const newCeleb = await db.collection('celebrity').insertOne({name, job, movies})
            console.log(`new celebrity created`)
            res.json(newCeleb)
         } else {
            res.json(celeb)
         }

    }catch (err){
        console.log(err)
    }
     
})

export default router
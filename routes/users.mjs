import express from 'express'
import user from '../models/user.mjs'
import {connectDb, getDb} from '../db/conn.mjs';

connectDb()


const router = express.Router()

router.get('/', async (req, res) => {
    // res.send('user list')
    try{
        const db = getDb()

        const users = await db.collection('users').find().toArray() 
        res.json(users)
        // console.log(users)
    } catch (err){
        console.log(err)
    }
})


export default router
import express from 'express'
import user from '../models/user.mjs'
import connectDb from '../db/conn.mjs';

const router = express.Router()

router.get('/', async (req, res) => {
    res.send('user list')
    // try{
    //     const connectDB = connectDb()

    //     const users = await connectDB.collection('users').find().toArray() 
    //     res.json(users)

    // } catch (err){
    //     console.log(err)
    // }
})


export default router
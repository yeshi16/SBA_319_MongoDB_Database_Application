import express from 'express'
import {connectDb, getDb} from '../db/conn.mjs';



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

// create new user`
router.post('/', async (req, res) => {
    try {
        const db = getDb();
        const { name, email } = req.body;
        const newUser = await db.collection('users').insertOne({ name, email });
        res.json(newUser);
    } catch (error) {
        console.error('error adding user:', error);
    }
});


export default router
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

// update user
router.patch('/:id', async (req, res) => {
    const db = getDb();
    const user = await db.collection('users').findOne() 
    user.name = req.body.name || user.name
    user.email = req.body.email || note.email
    res.json(user);
})

// delete a note
router.delete('/:id', async (req, res) => {
   
    const id = req.params.id
    
    const db = getDb();
    const user = await db.collection('users').findOne() 
    await db.collection('users').deleteOne(user) 
    res.json({message: `${user.params.id} is deleted for the database`})
    
})


export default router
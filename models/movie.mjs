import mongoose from "mongoose";

 const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    poster: {
        type: Image
    },
    discription: {
        type: String
    },
    year: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

 })

 export default mongoose.model('Movie', MovieSchema)
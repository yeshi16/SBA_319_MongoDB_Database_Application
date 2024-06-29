import mongoose from "mongoose";

 const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    poster: {
        type: String
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

 MovieSchema.index({user: 1})

 export default mongoose.model('Movie', MovieSchema)
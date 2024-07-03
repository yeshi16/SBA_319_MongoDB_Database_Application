import mongoose from "mongoose";
import Movie from '../models/movie.mjs'

const CelebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    job: {
        type: [String],
        required: true
    },
    movies: {
        type: [Movie]
    }

})

export default mongoose.model('Celeb', CelebritySchema)
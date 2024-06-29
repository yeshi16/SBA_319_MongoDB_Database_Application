import mongoose from "mongoose";

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
        type: [MovieSchema]
    }

})

export default mongoose.model('Celeb', CelebritySchema)
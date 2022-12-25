import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    username: { //username
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    comments: {
        type: Array
    }
}, {
    timestamps: true
})


//mongoose.model("COLLECTION NAME". ___Schema)
const Post = mongoose.model('post', postSchema)

export default Post
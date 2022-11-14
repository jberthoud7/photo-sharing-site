import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    //image 
    caption: {
        type: String,
        required: true
    },
    user_id: { //object id of user object
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

const Post = mongoose.model('Post', postSchema)

export default Post
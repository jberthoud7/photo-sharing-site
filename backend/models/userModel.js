import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    hashed_pswd:{
        type: String,
        required: true
    },
    followers: {
        type: Array
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User
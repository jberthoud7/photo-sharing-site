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

//mongoose.model("COLLECTION NAME". ___Schema)
const User = mongoose.model('users', userSchema)

export default User
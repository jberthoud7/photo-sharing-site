import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

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
    following: {
        type: Array
    }
}, {
    timestamps: true
})


userSchema.pre("save", function(next) {
    const user = this

    if(this.isNew){
        bcrypt.genSalt(10, function (saltError, salt){
            if(saltError){
                return next(saltError)
            } else{
                bcrypt.hash(user.hashed_pswd, salt, function(hashError, hash){
                    if(hashError){
                        return next(hashError)
                    }

                    user.hashed_pswd = hash
                    next()
                })
            }
        })
    }
    else{
        return next()
    }
})

//mongoose.model("COLLECTION NAME". ___Schema)
const User = mongoose.model('users', userSchema)

export default User
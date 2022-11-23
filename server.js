import connectDB from './backend/config/db.js'
import express from 'express'
import dotenv  from 'dotenv'
import User from './backend/models/userModel.js'

//connect database
connectDB()

//dotenv config
dotenv.config()

const app = express()
app.use(express.json())

//POST to create new account
app.post('/createAccount', (req, res) => {
    const { parcel} = req.body
    if(!parcel){
        return res.status(400).send({status: 'POST failed'})
    }
    res.status(200).send({status: 'recieved'})
    const newUser = new User({username: parcel.username, hashed_pswd: parcel.password})
    console.log(newUser)
    newUser.save()
})

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
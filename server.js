import connectDB from './backend/config/db.js'
import express from 'express'
import dotenv  from 'dotenv'
import User from './backend/models/userModel.js'
import multer from 'multer'

//connect database
connectDB()

//dotenv config
dotenv.config()

// Should this be moved to a diff file in middleware? 
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
    console.log("Creating user ", parcel.username)
    newUser.save()
})

//GET to check if user exists for login
app.get('/getUser:dynamic', (req, res) => {
    const {dynamic} = req.params
    User.find({username: dynamic}, "username hashed_pswd", (err, users) =>
    {
        if(err){
            res.status(400).send({status: 'GET failed'})
        }
        if(users.length == 0){
            res.status(200).send({status: 'User does not exist'})
        }
        else{
            // console.log(users)
            // console.log("pswd:", users[0].hashed_pswd)
            res.status(200).send({status: 'User exists', hashed_pswd: users[0].hashed_pswd})
        }
    })

})

// POST for uploading photos
app.post('/uploadPhoto', upload.single("file"), async (req, res) => {
    // req.file access all the file properties
    try {
        // check if image or not
        if (!req.file) {
            res.json({
                success: false,
                message: "Please upload a file"
            });
        } else {
            let imageToUpload = {
                file: {
                    data: req.file.buffer
                    contentType: req.file.mimetype
                },
                fileName: req.body.fileName
            };
            const uploadImage = new Upload(imageToUpload);
            // saves image to the database
            const upload = await uploadObject.save();
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})



const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
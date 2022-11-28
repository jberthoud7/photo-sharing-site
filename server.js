import connectDB from './backend/config/db.js';
import express from 'express';
import dotenv  from 'dotenv';
import User from './backend/models/userModel.js';
import Post from './backend/models/postModel.js';
import cors from 'cors';
import * as path from 'path';
import multer from 'multer';
import { uuid } from 'uuidv4';

//connect database
connectDB()

//dotenv config
dotenv.config()

// Should this be moved to a diff file in middleware? 
const app = express()
app.use(cors())
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

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'images');
    },
    filename: function (req,file,cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage: storage});

// POST for uploading photos
app.post('/createPost', upload.single("photo"), (req, res) => {

    const user_id = req.body.user_id;
    const image = req.body.image;
    const caption = req.body.caption;
    const likes = req.body.likes;

    const newPostData = {
        user_id,
        image,
        caption,
        likes
    }

    const newPost = new Post(newPostData);

    newPost.save()
        .then(() => res.json("Post Added"))
        .catch(err => res.status(400).json("Error: " + err));
})



const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
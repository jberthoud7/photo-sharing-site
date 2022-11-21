import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import connectDB from '../config/db.js'
import mongoose from 'mongoose'

//getUsers function to get all users
export const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find({})
    res.json(users)
})

//getUserById function to retrieve user by id
export const getUserById  = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)

    //if user id match param id send user else throw error
    if(user){
        res.json(user)
    }else{
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
})

export const createUser = asyncHandler(async(req, res) => {
    console.log("Calling create user");

    //TODO: hash and salt password

    // let userObj = {
    //     username: req.body.username,
    //     hashed_pswd: req.body.password,
    // };
    
    // let conn = mongoose.connection;
    // conn.collection('mod7').insertOne(newUser, function(err, res){
    //     if(err) throw err;
    //     console.log("user created from userController.js");
    // });


    // const newUser = userData;

    // let conn = mongoose.connection;
    // conn.collection('mod7').insertOne(newUser, function(err, res){
    //     if(err) throw err;
    //     console.log("user created (from userController.js");
    // });
})
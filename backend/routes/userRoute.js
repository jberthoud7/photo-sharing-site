import { getUsers, getUserById } from "../controllers/userController.js";
import { createUser } from "../controllers/userController.js";
import express from 'express';
const userRoutes = express.Router();

// express router method to create route for getting all users
//userRoutes.route('/').get(getUsers)

// express router method to create route for getting users by id
//router.route('/:id').get(getUserById)


userRoutes.route("/registeraa").post(createUser)



export default userRoutes
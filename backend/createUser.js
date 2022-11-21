// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import connectDB from "./config/db";
// const mongoose = require("mongoose");

// // let conn = connectDB.connection;

// // let newUser = {
// //     username: "a",
// //     hashed_pswd: "ap"
// // };

// // conn.collection('mod7').insert(newUser);

// // console.log('newUser');

// //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// // export default function CreateUser() {
// //     const [form, setForm] = useState({
// //         username: "",
// //         hashed_pswd: "",
// //     })
// // }
// // const navigate = useNavigate();

// // function updateForm(value){
// //     return setForm((prev) => {
// //         return { ...prev, ...value};
// //     });
// // }


// // async function onSubmit(e) {
// //     e.preventDefault();

// //     const newUser = { ...form};


// //     await fetch("http://localhost:3000/createUser", {
// //         method: "POST",
// //         headers:{
// //             "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(newUser),
// //     })
// //     .catch(error => {
// //         console.log(error);
// //         return;
// //     });




// //     setForm({username: "", hashed_pswd: "" });
// //     navigate("/");
// // }
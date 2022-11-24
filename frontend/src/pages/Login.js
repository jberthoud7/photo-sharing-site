import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import CreateForm from "../components/LoginCreateAccountForm.js"
import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router-dom'

function Login(props){

    const navigate = useNavigate();

    // tutorial used: https://www.freecodecamp.org/news/pass-data-between-components-in-react/
    // dont know if we need this next line
    const [data, setData] = useState('');

    // gets back the form data when submit is clicked
    const formToLogin = (formData) => {

        //https://coderrocketfuel.com/article/store-passwords-in-mongodb-with-node-js-mongoose-and-bcrypt
        //use bcrypt compare(userEnteredPswd, hashedPswd)

        //need to get pswd where userEnteredUsername = db username

        getUsernameAndPassword(formData)
    }

    async function getUsernameAndPassword (userData) {
        // console.log("calling getUsernameAndPassword");
        const res = await fetch("http://localhost:3000/getUser" + userData.username, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json()
        let loginSuccess = false;


        if(data.status == 'User does not exist'){
            console.log('DNE')
        }
        else if(data.status == 'User exists'){
            // console.log("user exists")
            // console.log(data.hashed_pswd)
            bcrypt.compare(userData.password, data.hashed_pswd)
            .then(function(result){
                // console.log(userData.password)
                // console.log(data.hashed_pswd)
                if(result){
                    console.log("logged in")
                    loginSuccess = true
                }
                else{
                    console.log("login failed")
                }
            })
            .then(() => {
                if(loginSuccess){
                    navigate('/Feed');
                }
            })
        }


    }

    return(
        <CreateForm
            sendInputsBack={formToLogin}
            header="Login"
            button="Login"
        />
    )
}

export default Login
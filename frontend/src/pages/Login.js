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
        getUsernameAndPassword(formData)
    }

    async function getUsernameAndPassword (userData) {
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
            bcrypt.compare(userData.password, data.hashed_pswd)
            .then(function(result){
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
                    sessionStorage.setItem("user", userData.username)
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



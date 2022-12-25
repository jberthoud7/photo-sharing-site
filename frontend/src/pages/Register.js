import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateForm from "../components/LoginCreateAccountForm.js"

function Register(props){

    const navigate = useNavigate();

    // tutorial used: https://www.freecodecamp.org/news/pass-data-between-components-in-react/
    // dont know if we need this next line
    const [data, setData] = useState('');

    // gets back the form data when submit is clicked
    const formToRegister = (formData) => {
        createAccount(formData);
    }

    async function createAccount (userData) {
        //first check if user exists already
        const res = await fetch("http://localhost:3000/getUser" + userData.username, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json()


        if(data.res == "User exists"){
            console.log("user already exists")
        }
        else{
            //if user does not exist, create user
            await fetch("http://localhost:3000/createAccount", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({parcel: userData})
            })
            .then(() => {
                sessionStorage.setItem("user", userData.username)
                navigate('/Feed')
            })
        }
        
    }


    return(
        <CreateForm 
            sendInputsBack={formToRegister}
            header="Create Account"
            button="Register"
        />
    )
}


export default Register
import React from 'react';
import { useState } from 'react';
import CreateForm from "../components/LoginCreateAccountForm.js"

function Register(props){

    // tutorial used: https://www.freecodecamp.org/news/pass-data-between-components-in-react/
    // dont know if we need this next line
    const [data, setData] = useState('');

    // gets back the form data when submit is clicked
    const formToRegister = (formData) => {
        console.log(formData);

        createAccount(formData);
    }

    async function createAccount (userData) {
        await fetch("http://localhost:3000/registeraa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
        });
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
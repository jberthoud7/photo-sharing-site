import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import CreateForm from "../components/LoginCreateAccountForm.js"

function Login(props){

    // tutorial used: https://www.freecodecamp.org/news/pass-data-between-components-in-react/
    // dont know if we need this next line
    const [data, setData] = useState('');

    // gets back the form data when submit is clicked
    const formToLogin = (formData) => {
        console.log(formData);
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
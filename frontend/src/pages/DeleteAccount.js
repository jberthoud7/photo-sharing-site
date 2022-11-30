import classes from "./pagesStyles/DeleteAccount.module.css";
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function DeleteAccount () {

    const navigate = useNavigate();

    const [username, setNewUsername] = useState( {
        username: ''
    });

    async function handleSubmit (e) {
        e.preventDefault();
        console.log(username.username)
        await axios.delete('http://localhost:3000/deleteUser', { params: { username: username.username } })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    } 

    const handleInputChange = (e) => {
        setNewUsername({...username, username: e.target.value});
    }

    return (
        <div className={classes.centerContainer}>
            <h2 className={classes.header}>Delete Account</h2>
                <div className={classes.container}> 
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <div><label> Please enter your username to confirm account deletion:</label></div>
                        <div><input type="text" name="username" onChange={handleInputChange} /></div>
                        <button type="submit">Confirm</button>
                    </form>
                </div>
        </div>
    )
}

export default DeleteAccount
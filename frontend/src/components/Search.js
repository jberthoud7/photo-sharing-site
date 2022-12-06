import classes from "./pagesStyles/DeleteAccount.module.css";
import React, {useState} from 'react';
import UserProfile from '../pages/UserProfile'
import { useNavigate } from 'react-router-dom';


function Search (props) {

    const [username, setNewUsername] = useState( {
        username: ''
    });
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();
        const user = username.username;
        // this.props.history.push({
        //     pathname: '/UserProfile',
        //       state: user // your data array of objects
        //   })
        setNewUsername({...username, username: e.target.value});
        navigate("/UserProfile")
    } 

    const handleInputChange = (e) => {
        setNewUsername({...username, username: e.target.value});
    }

    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit}>
                <input placeholder="Search..." type="text" onChange={handleInputChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
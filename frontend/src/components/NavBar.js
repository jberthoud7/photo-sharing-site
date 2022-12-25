import classes from '../components/componentsStyles/NavBar.module.css';
import { NavLink  } from 'react-router-dom';
import {MdOutlinePhotoCameraBack, MdGroups, MdLogout, MdDeleteForever,MdOutlineHome} from "react-icons/md";
import React, {useState} from 'react';
import UserProfile from '../pages/UserProfile'
import { useNavigate} from 'react-router-dom';


function NavBar(props){

    const [username, setNewUsername] = useState( {
        username: ''
    });
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();
        setNewUsername({...username, username: e.target.value});
        const user = username.username;
        navigate('/UserProfile',{state:{username:user}});
    } 

    const handleInputChange = (e) => {
        setNewUsername({...username, username: e.target.value});
    }


    return(
        <div className={classes.container}>
            <div>
                <h3>Finstagram</h3>
            </div>
            <div className={classes.linkContainer}>
                <NavLink to="/Feed" className={classes.link}>{MdOutlineHome}</NavLink>
                <NavLink to="/CreateNewPost" className={classes.link}>{MdOutlinePhotoCameraBack}</NavLink>
                <NavLink to="/Following" className={classes.link}>{MdGroups}</NavLink>
                <NavLink to="/" className={classes.link}>{MdLogout}</NavLink> 
                <NavLink to="/DeleteAccount" className={classes.link}>{MdDeleteForever}</NavLink>
            </div>
            <div>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <input placeholder="Search..." type="text" onChange={handleInputChange}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
        
    )
}

export default NavBar
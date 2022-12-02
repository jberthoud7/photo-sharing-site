import classes from '../components/componentsStyles/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import {MdOutlinePhotoCameraBack, MdGroups, MdLogout, MdDeleteForever} from "react-icons/md";



function NavBar(props){

    return(
        <div className={classes.container}>
            <div>
                <h3>Website Name</h3>
            </div>
            <div className={classes.linkContainer}>
                <NavLink to="/CreateNewPost" className={classes.link}>{MdOutlinePhotoCameraBack}</NavLink>
                <NavLink to="/Following" className={classes.link}>{MdGroups}</NavLink>
                <NavLink to="/" className={classes.link}>{MdLogout}</NavLink> 
                <NavLink to="/DeleteAccount" className={classes.link}>{MdDeleteForever}</NavLink>
            </div>
            <div>
                <form className={classes.form}>
                        <input placeholder="Search..." type="text"/>
                        <button type="submit">Search</button>
                </form>
            </div>
        </div>
        
    )
}

export default NavBar
import classes from '../components/componentsStyles/NavBar.module.css';
import { NavLink } from 'react-router-dom';



function NavBar(props){


    return(
        <div className={classes.container}>
            <div>
                <h3>Website Name</h3>
            </div>
            <div className={classes.linkContainer}>
                <NavLink to="/CreateNewPost" className={classes.link}>Create a Post</NavLink>
                <NavLink className={classes.link}>Followers</NavLink>
                <NavLink to="/" className={classes.link}>Logout</NavLink> 
                <NavLink to="/deleteAccount" className={classes.link}>Delete Account</NavLink>
            </div>

        </div>
    )
}

export default NavBar
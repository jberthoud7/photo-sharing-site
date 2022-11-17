import classes from '../components/componentsStyles/NavBar.module.css';



function NavBar(props){



    return(
        <div className={classes.container}>
            <div>
                <h3>Website Name</h3>
            </div>
            <div className={classes.linkContainer}>
                <h3>Followers</h3>
                <h3>Logout</h3> 
                <h3>Delete Account</h3>
            </div>

        </div>
    )
}

export default NavBar
import { Link } from "react-router-dom";
import classes from '../pages/pagesStyles/Login.module.css';


function Login(){

    return(
        <div>
            <h1>Login</h1>

            <Link to='/feed' className={classes.link}>Feed</Link>

        </div>
    )
}

export default Login
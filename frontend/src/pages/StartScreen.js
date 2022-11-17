//import {useState} from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";
import classes from './StartScreen.module.css';

function StartScreen(props)
{
    //value passed into useState is whether or not feed is displayed
    //const [ feedIsShown, setFeedIsShown ] = useState(false);

    function loginHandler(){
        console.log("login");
        //setFeedIsShown(true);
    }
    function registerHandler(){
        console.log("register");
        //setFeedIsShown(true);
    }


    return(
        <div>
            <div className={classes.title}>
                <h1>Photo Sharing Site</h1>
            </div>
            <div className={classes.linkDiv}>
                <Link to='/login' className={classes.link}>Login</Link>
                <Link to='/register' className={classes.link}>Register</Link>
            </div>
            {/* { feedIsShown && <Feed />} */}
        </div>
    );
}

export default StartScreen
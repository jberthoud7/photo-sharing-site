//import {useState} from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";

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
            <div className="startScreenTitle">
                <h1>Photo Sharing Site</h1>
            </div>
            <div className="startScreenBtns">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
            {/* { feedIsShown && <Feed />} */}
        </div>
    );
}

export default StartScreen
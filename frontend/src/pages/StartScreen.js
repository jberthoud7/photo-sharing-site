//import {useState} from "react";
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
                <button className="btn" onClick={loginHandler}>Login</button>
                {/* <Link to="/login" className="btn btn-primary">Login</Link> */}
                <button className="btn" onClick={registerHandler}>Register</button>
                {/* <Link to="/register" className="btn btn-primary">Login</Link> */} 
            </div>
            {/* { feedIsShown && <Feed />} */}
        </div>
    );
}

export default StartScreen
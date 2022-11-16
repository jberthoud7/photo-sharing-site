import {useState} from "react";

function StartScreen(props)
{
    function login(){
        console.log("login");
    }
    function register(){
        console.log("register");
    }


    return(
        <div>
            <div className="startScreenTitle">
                <h1>Photo Sharing Site</h1>
            </div>
            <div className="startScreenBtns">
                <button className="btn" onClick={login}>Login</button>
                {/* <Link to="/login" className="btn btn-primary">Login</Link> */}
                <button className="btn" onClick={register}>Register</button>
                {/* <Link to="/register" className="btn btn-primary">Login</Link> */} 
            </div>
        </div>
    );
}

export default StartScreen
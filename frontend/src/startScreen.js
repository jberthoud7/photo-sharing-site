import React, {useEffect, useState} from 'react'

const startScreen = () =>{
    return(
        <div id="startScreen">
            <div id="loginDiv">
                <Link to="/login" className="btn btn-primary">Login</Link>
            </div>
            <div id="registerDiv">
                <Link to="/register" className="btn btn-primary">Login</Link>
            </div>  
        </div>
    );


};

export default startScreen;
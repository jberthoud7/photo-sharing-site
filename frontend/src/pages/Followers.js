import classes from "./pagesStyles/Followers.module.css";
import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Followers () {

    // similar axios to GET posts, needs to be an async function

    return (
        <div className={classes.centerContainer}>
            <h2 className={classes.header}>Followers</h2>
            <div className={classes.container}> 
                
            </div>
        </div>
    )
}

export default Followers
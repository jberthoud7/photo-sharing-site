import { useState, useEffect } from 'react'
import classes from "./componentsStyles/Following.module.css"

function FollowingList(props){

    console.log("IN LIST COMP")

    useEffect(()=> {
            props.getFollowedUsers()
    }, [])

    if(props.followingList != null){
        return(
            <div className={classes.listContainer}>
                <h3 className={classes.header}> Following </h3>
                <ul className={classes.list}>
                    {
                        props.followingList.map((user) => {
                            if(user !== sessionStorage.user){
                                return <li key={user}>{user}</li>
                            }
                            
                        })}
                    
                </ul>
            </div>
            

        )
    }
}

export default FollowingList
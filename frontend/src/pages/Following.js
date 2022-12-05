import React from "react";
import NavBar from "../components/NavBar"
import classes from "./pagesStyles/Feed.module.css"
import FollowUserForm from "../components/FollowUserForm";
import FollowingList from "../components/FollowingList";
import { useState, useEffect } from 'react'

  
function Following(props){

    //pass thru method to send data from form to followUser
    const formToFollow = (formData) => {
        followUser(formData)
    }

    const [followingList, setFollowingList] = new useState(null);

    function getFollowedUsers (){
        
        const user = sessionStorage.getItem("user")
        // console.log("start of getFollowedUsers")
        // console.log(user)

        fetch("http://localhost:3000/getFollowingUsers" + user, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then((data) => {
            setFollowingList(data.followingList);
            // console.log("in getFollowedUsers")
            // console.log(followingList)
        })

        return followingList
    }

    async function followUser (userData) {
        //console.log(userData)
        const res = await fetch("http://localhost:3000/followUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userFollowing: userData.userFollowing,
                userToFollow: userData.userToFollow
            })
        })
        .then(response => response.json())
        .then(getFollowedUsers())

    }


    return(
        <div>
            <NavBar />
            <FollowUserForm
                sendInputBack={formToFollow}
            />
            <FollowingList
                followingList={followingList}
                getFollowedUsers = {getFollowedUsers}
            />

        </div>
    )


}

export default Following;
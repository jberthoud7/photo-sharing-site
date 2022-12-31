import React from "react";
import NavBar from "../components/NavBar"
import FollowUserForm from "../components/FollowUserForm";
import FollowingList from "../components/FollowingList";
import { useState, useEffect } from 'react'
import { checkIfUserExists, checkIfUserIsFollowed } from "../helpers/utils";

  
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
        })

        return followingList
    }

    async function followUser (userData) {
        
        const userExists = await checkIfUserExists(userData.userToFollow)

        if(userExists){
            const userLoggedIn = sessionStorage.getItem("user")
            const userIsFollowedAlready = await checkIfUserIsFollowed(userData.userToFollow, userLoggedIn)

            if(!userIsFollowedAlready){
                await fetch("http://localhost:3000/followUser", {
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
            else{
                //TODO: popup user already followed
                console.log("user is already followed")
            }
        }
        else{
            //TODO: popup user dne
            console.log('User does not exist')
        }
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
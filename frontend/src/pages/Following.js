import React from "react";
import NavBar from "../components/NavBar"
import FollowUserForm from "../components/FollowUserForm";
import FollowingList from "../components/FollowingList";
import { useState, useEffect } from 'react'
import { checkIfUserExists, checkIfUserIsFollowed, getFollowedUsers } from "../helpers/utils";
import classes from "./pagesStyles/FollowingPage.module.css"
  
function Following(props){
    
    const sessionUser = sessionStorage.getItem("user")

    const [followingList, setFollowingList] = useState(null);
    const [isLoading, setLoading] = useState(true)

    //pass thru method to send data from form to followUser
    const formToFollow = (formData) => {
        followUser(formData)
    }

    useEffect(() => {
            onPageLoad()
    }, [])

    async function onPageLoad() {
        const resList = await getFollowedUsers(sessionUser)
        setFollowingList(resList)
        setLoading(false)
    }
    
    async function followUser (userData) {
        
        const userExists = await checkIfUserExists(userData.userToFollow)

        if(userExists){
            const userLoggedIn = sessionStorage.getItem("user")
            const userIsFollowedAlready = await checkIfUserIsFollowed(userData.userToFollow, userLoggedIn)

            if(!userIsFollowedAlready){
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

                const data = await res.json()
                if(data.res == "success"){
                    console.log("AAAAAAAAAAAAAAAA")
                    setFollowingList(await getFollowedUsers(sessionUser))
                    console.log(followingList)
                }
                
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

    if(isLoading){
        return(
            <div>
                <NavBar />
            </div>
        )
    }
    else{
        return(
            <div>
                <NavBar />
                <div className={classes.pageContainer}>
                    <div className={classes.followNewUsersContainer}>
                        <FollowUserForm
                            sendInputBack={formToFollow}
                        />
                    </div>
                    <div className={classes.currentFollowingContainer}>
                        <FollowingList
                            followingList={followingList}
                            getFollowedUsers = {getFollowedUsers}
                        />
                    </div>
                    
                </div>
                
    
            </div>
        )
    }
    


}

export default Following;
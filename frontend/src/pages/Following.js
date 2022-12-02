import React from "react";
import NavBar from "../components/NavBar"
import UsersFollowing from "../components/UsersFollowing";
import classes from "./pagesStyles/Feed.module.css"
import axios from 'axios';
import FollowUserForm from "../components/FollowUserForm";
import FollowingList from "../components/FollowingList";

  
function Following(props){

    let followingList = null;

    getFollowedUsers();

    

    //pass thru method to send data from form to followUser
    const formToFollow = (formData) => {
        followUser(formData)
    }

    async function getFollowedUsers (){
        console.log("this happens")
        const user = sessionStorage.getItem("user")
       

        const res = await fetch("http://localhost:3000/getFollowingUsers" + user, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();
        if(data.status == 'success'){
            followingList = data.followingList;
        }
        
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

        const data = await res.json()
        
        followingList = data.followingList



    }


    return(
        <div>
            <NavBar />
            <FollowUserForm
                sendInputBack={formToFollow}
            />
            <FollowingList
                followingList={followingList}
            />

        </div>
    )


}

export default Following;
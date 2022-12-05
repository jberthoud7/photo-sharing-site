import React from "react";
import NavBar from "../components/NavBar"
import Post from "../components/Post";
import classes from "./pagesStyles/Feed.module.css"
import axios from 'axios';





//     render() {
//         const children = this.state.data.map((post) => (
//             <Post 
//                     key={post._id} 
//                     img={post.image}
//                     caption={post.caption}
//                     username={post.user_id}
//                 />
//         ))
//         return (
//             <div>
//                 <NavBar />
//                 <ul className={classes.list}>
//                     {children}
//                 </ul>
//             </div>
//         );
//     }
  

//   export default Feed;






function Feed(props){

    //let followingList = []


    function getFollowedUsers () { 
        
        //let followingList = []
            
            const user = sessionStorage.getItem("user")
            // console.log("start of getFollowedUsers")
            // console.log(user)

            const followingList = fetch("http://localhost:3000/getFollowingUsers" + user, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            
            // .then((data) => {
            //     //followingList = data.followingList;
            //     console.log("getting followingList");
            //     console.log(data.followingList);
            // })

            return followingList.then(response => response.json())
    }

    function getPosts(users) {
        fetch('http://localhost:3000/getPost', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                users: users
            })
        })
        .then((res) => {
            let response = res.json();
            console.log("success");
            console.log(res.status);
            console.log(response);
            
        })
        .catch(err => {
            console.log("error");
            console.log(err);
        })
    }
            
    

    getFollowedUsers()
    .then((res) => {
        console.log(res.followingList)
        getPosts(res.followingList)
    })

        return(
            <div>
                <NavBar />
                <ul className={classes.list}>
                    <li>Post1</li>
                </ul>
            </div>
        )
}

export default Feed;
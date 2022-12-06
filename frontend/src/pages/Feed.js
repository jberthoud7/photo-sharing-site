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



class Feed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        //this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        //function getFollowedUsers () { 
        
            
                
            const user = sessionStorage.getItem("user")
            console.log("start of getFollowedUsers")
            console.log(user)

            fetch("http://localhost:3000/getFollowingUsers" + user, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(response => response.json())
            .then(users => {
                console.log("users here")
                console.log(users.followingList)
                fetch('http://localhost:3000/getPost', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        users: users.followingList
                    })
                })
                .then(response => response.json())
                .then(posts => {
                    console.log("posts here")
                    console.log(this.state.data)
                    console.log(posts)
                    this.setState({
                        data: posts.data
                    })
                    console.log("after setting state")
                    console.log(this.state.data)
                })
                .catch(err => {
                    console.log("error");
                    console.log(err);
                })
            })
            
    }




    render() {
        console.log("here")
        console.log(this.state.data)
        const children = this.state.data.map((post) => (
            <Post 
                    propId={post._id}
                    key={post._id} 
                    img={post.image}
                    caption={post.caption}
                    username={post.user_id}
                    likes={post.likes}
                />
        ))
        return (
            <div>
                <NavBar />
                <ul className={classes.list}>
                    {children}
                </ul>
            </div>
        );
    }

}


export default Feed;
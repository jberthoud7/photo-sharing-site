import React from "react";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import classes from "./pagesStyles/Feed.module.css"
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';



function UserProfile(props) {

    const location = useLocation();
    const [userPosts, setUserPosts] = useState( {
        postData: []
    });

    useEffect(() => {
        console.log(location.state.username)

        const user = [location.state.username]

        fetch('http://localhost:3000/getPost', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    users: user
                })
            })
            .then(response => response.json())
            .then(posts => {
                setUserPosts({...userPosts, postData: posts.data});
            })
            .catch(err => {
                console.log("error");
                console.log(err);
            })

    }, [location, userPosts]);

        return (
            <div>
                <NavBar />
                <ul className={classes.list}>
                    {userPosts.postData.map((post) => (
                        <Post 
                            propId={post._id}
                            key={post._id} 
                            img={post.image}
                            caption={post.caption}
                            username={post.username}
                            likes={post.likes}
                            comments={post.comments}
                        />
                    ))}
                </ul>
            </div>
        );

}


export default UserProfile;
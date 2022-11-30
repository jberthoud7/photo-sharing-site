//import {useState} from "react";
import NavBar from "../components/NavBar"
import Post from "../components/Post";
import classes from "./pagesStyles/Feed.module.css"
import axios from 'axios';

const DUMMY_DATA = [
    {
        id: '1',
        image: 'https://s3.us-east-1.amazonaws.com/florence-2019/images/_1200x630_crop_center-center_82_none/chick1.jpg?mtime=20201009125544',
        caption: 'this is the first post',
        user_id: 'AAA111AAA',
        username: 'user1',
        likes: 11,
        comments: [
            {comment:"good post", user:"user2"},
            {comment:"bad post", user:"user3"}
        ]
    },
    {
        id: '2',
        image: 'https://brandlogos.net/wp-content/uploads/2022/02/chick-fil-a-logo-brandlogos.net_-512x512.png',
        caption: 'this is the second post',
        user_id: '222BBB222',
        username: 'user2',
        likes: 22,
        comments: [
            {comment:"good post", user:"user1"},
            {comment:"bad post", user:"user3"}
        ]
    }
]


function Feed(props){

    axios.get('http://localhost:3000/getPost')
        .then((res) => {
            console.log("success");
            console.log(res.data);
        })
        .catch(err => {
            console.log("error");
            console.log(err);
        });

    return(
        <div>
            <NavBar />
            <ul className={classes.list}>
                {DUMMY_DATA.map(post => (
                <Post 
                    key={post.id} 
                    img={post.image}
                    caption={post.caption}
                    username={post.username}
                />))}
            </ul>
        </div>
    )
}

export default Feed
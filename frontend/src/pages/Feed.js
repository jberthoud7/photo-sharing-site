import React from "react";
import NavBar from "../components/NavBar"
import Post from "../components/Post";
import classes from "./pagesStyles/Feed.module.css"
import axios from 'axios';

class Feed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
  
    componentDidMount() {
        axios.get('http://localhost:3000/getPost')
            .then((res) => {
                console.log("success");
                console.log(res.data);
                this.setState({
                    data: res.data.data
                });
            })
            .catch(err => {
                console.log("error");
                console.log(err);
            });
    }
    // componentDidUpdate() {
    //     axios.get('http://localhost:3000/getPost')
    //         .then((res) => {
    //             console.log("success");
    //             console.log(res.data);
    //         })
    //         .catch(err => {
    //             console.log("error");
    //             console.log(err);
    //         });
    // }

    render() {
        const children = this.state.data.map((post) => (
            <Post 
                    key={post._id} 
                    img={post.image}
                    caption={post.caption}
                    username="1234"
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
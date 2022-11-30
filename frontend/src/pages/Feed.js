import React from "react";
import NavBar from "../components/NavBar"
import Post from "../components/Post";
import classes from "./pagesStyles/Feed.module.css"
import axios from 'axios';

class Feed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id: '',
        image: '',
        caption:'',
        likes: 0
      };
    }
  
    componentDidMount() {
        axios.get('http://localhost:3000/getPost')
            .then((res) => {
                console.log("success");
                console.log(res.data);
                this.setState({
                    id: res.data.data[0].id,
                    image: res.data.data[0].image,
                    caption: res.data.data[0].caption,
                    likes: res.data.data[0].likes
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
      return (
        <div>
            <NavBar />
            <ul className={classes.list}>
                <Post 
                    key={this.state.id} 
                    img={this.state.image}
                    caption={this.state.caption}
                    username="1234"
                />
            </ul>
        </div>
      );
    }
  }

  export default Feed;
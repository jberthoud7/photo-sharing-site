import React from "react";
import NavBar from "../components/NavBar"
import UsersFollowing from "../components/UsersFollowing";
import classes from "./pagesStyles/Feed.module.css"
import axios from 'axios';

class Followers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
  
    // need to be able to get username of the person logged in
    //https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react
    componentDidMount() {
        axios.get('http://localhost:3000/getFollowingUsers')
            .then((res) => {
                console.log("success");
                console.log(res.data.data[0]);
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
        const children = this.state.data.map((user) => (
            <UsersFollowing
                    username={user.username}
                />
        ))
        return (
            <div>
                <NavBar />
                <div className={classes.centercontainer}>
                    <ul className={classes.list}>
                        {children}
                    </ul>
                </div>
            </div>
        );
    }
  }

  export default Followers;
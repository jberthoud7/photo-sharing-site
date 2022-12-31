import { useRef } from 'react';
import classes from "./componentsStyles/Following.module.css"

function FollowUserForm(props){

    const userToFollowRef = useRef();

    async function submitHandler(event){
        event.preventDefault();

        const userToFollow = userToFollowRef.current.value;

        const userFollowing = sessionStorage.getItem("user");

        document.getElementById("userToFollowForm").value = "";

        const userData = {
            userFollowing,
            userToFollow
        }

        props.sendInputBack(userData);
    }


    return(
        <div className={classes.headerContainer}>
            <h3 className={classes.header}> Follow New User</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" required id="userToFollowForm" placeholder="Username" ref={userToFollowRef}/>
                </div>
            </form>

        </div>
    )
}

export default FollowUserForm
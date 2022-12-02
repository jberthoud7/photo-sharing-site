import { useRef } from 'react';

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
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" required id="userToFollowForm" placeholder="User to follow" ref={userToFollowRef}/>
                </div>
            </form>

        </div>
    )
}

export default FollowUserForm
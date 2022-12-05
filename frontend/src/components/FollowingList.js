import { useState, useEffect } from 'react'

function FollowingList(props){

    console.log("IN LIST COMP")

    useEffect(()=> {
            props.getFollowedUsers()
    }, [])

    if(props.followingList != null){
        return(
            <div>
                <ul>
                    {
                        props.followingList.map((user) => {
                            return <li key={user}>{user}</li>
                        })}
                    
                </ul>
            </div>
            

        )
    }
}

export default FollowingList
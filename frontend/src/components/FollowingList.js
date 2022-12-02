function FollowingList(props){

    const followingList = props.followingList

    console.log("IN LIST COMP")
    console.log(followingList)


    return(
        <div>
            <ul>
                {followingList.map((user) => {
                    return <li>{user}</li>
                })}
            </ul>
        </div>
        

    )
}

export default FollowingList
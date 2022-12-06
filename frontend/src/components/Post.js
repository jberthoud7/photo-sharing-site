import classes from '../components/componentsStyles/Post.module.css';



function Post(props){

    const updateLikes = e => {
        console.log("click")
        console.log(e.target.id)
        fetch('http://localhost:3000/updateLikes', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        postId: e.target.id
                    })
                })
                .then(response => response.json())
                .then((res => {
                    const likeId = e.target.id + "L"
                    let likes = document.getElementById(likeId) 
                    likes.innerHTML = res.newLikes
                }))       
    }

    const updateComments = e => {
        const comment = document.getElementById("newComment").value

        fetch('http://localhost:3000/addComment', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        postId: e.target.id,
                        comment: comment
                    })
                })
                .then(response => response.json())
                // fix this
                .then((res => {
                    console.log(res.newComment)
                }))
    }


    return( 
    <li >
        <div className={classes.container}>
            <div className={classes.img}>
                <img  src={props.img} alt="" />
            </div>
            <div className={classes.text}>
                <h2>{props.username}</h2>
                <p>{props.caption}</p>
                <div>
                    <p className={classes.child} id={props.propId + "L"}>{props.likes}</p>
                    <button className={classes.child} id={props.propId} onClick={updateLikes}>Like</button>
                </div>
                {/* put in mapping through comments */}
                <div>
                    <input className={classes.child} type="text" id="newComment" placeholder="Comment"/>
                    <button className={classes.child} id={props.propId} onClick={updateComments}>Comment</button>
                </div>
            </div>
        </div>
    </li>
    )

}

export default Post
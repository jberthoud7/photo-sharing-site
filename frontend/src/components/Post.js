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


    return( 
    <li >
        <div className={classes.container}>
            <div className={classes.img}>
                <img  src={props.img} alt="" />
            </div>
            <div className={classes.text}>
                <h2>{props.username}</h2>
                <p>{props.caption}</p>
                <p id={props.propId + "L"}>{props.likes}</p>
                <button id={props.propId} onClick={updateLikes}>Like</button>
            </div>
        </div>
    </li>
    )

}

export default Post
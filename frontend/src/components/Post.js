import classes from '../components/componentsStyles/Post.module.css';
import Comment from "./Comments";
import {useState} from 'react'

function Post(props){

    const [comments, setComments] = useState( {
        commentsData: props.comments
    });

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
        const commentId = e.target.id + "newComment"
        const comment = document.getElementById(commentId).value

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
                .then((res => {
                    setComments({...comments, commentsData: res.data})
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
                <ul className={classes.list}>
                    {comments.commentsData.map((comment) => (
                        <Comment
                            comment={comment}
                        />
                    ))}
                </ul>
                <div>
                    <input className={classes.child} type="text" id={props.propId + "newComment"} placeholder="Comment"/>
                    <button className={classes.child} id={props.propId} onClick={updateComments}>Comment</button>
                </div>
            </div>
        </div>
    </li>
    )

}

export default Post
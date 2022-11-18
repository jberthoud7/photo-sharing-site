import classes from '../components/componentsStyles/Post.module.css';



function Post(props){

    return( 
    <li >
        <div className={classes.container}>
            <div className={classes.img}>
                <img  src={props.img} alt="" />
            </div>
            <div className={classes.text}>
                <h2>{props.username}</h2>
                <p>{props.caption}</p>
            </div>
        </div>
    </li>
    )

}

export default Post
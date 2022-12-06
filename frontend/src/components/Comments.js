import classes from '../components/componentsStyles/Comments.module.css';

function Comment(props){

    return( 
        <div>
            <p>{props.comment}</p>
        </div>
    )

}

export default Comment
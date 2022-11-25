import React from 'react';
import classes from "./pagesStyles/CreateNewPost.module.css"


function CreateNewPost(props) {

    // includes: spot for uploading an image 
    // and text entry box for caption

    function createPost() {

    }

    return (
        <div className={classes.centerContainer}>
            <div className={classes.container}>
                <h2 className={classes.header}>Create A New Post</h2>
                <form className={classes.form} onSubmit={createPost} id="createNewPost">
                    <div>
                        <input type="image" alt="Upload an image" />
                    </div>
                    <div>
                        <input type="text" required id="caption" placeholder="Caption..." />
                    </div>
                    <button type="sumbit"> Create Post</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNewPost


import React from 'react';
import classes from "./pagesStyles/CreateNewPost.module.css"


function CreateNewPost(props) {

    return (
        <div className={classes.centerContainer}>
            <h2 className={classes.header}>Create A New Post</h2>
                <div className={classes.container}>
                    <form className={classes.form} action="/upload" method="POST" enctype="multipart/form-data" id="createNewPost">
                        <div>
                            <input type="file" class="form-control" name="file" id="formImage" alt="Upload an image" />
                        </div>
                        <div class=''>
                            <input type="text" required id="caption" placeholder="Caption..." />
                        </div>
                        <button type="sumbit"> Create Post</button>
                    </form>
                </div>
        </div>
    )
}

export default CreateNewPost


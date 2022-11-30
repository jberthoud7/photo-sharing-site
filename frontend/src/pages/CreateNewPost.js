import React, {useState} from 'react';
import axios from 'axios';
import classes from "./pagesStyles/CreateNewPost.module.css";
import { useNavigate } from 'react-router-dom'


function CreateNewPost(props) {

    const navigate = useNavigate();

    const [newPost, setNewPost] = useState( {
        user_id: '1234',
        image: '',
        caption: '',
        likes: 0
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // how to get the user_id
        formData.append('user_id', newPost.user_id)
        formData.append('image', newPost.image);
        formData.append('caption', newPost.caption);
        formData.append('likes', newPost.likes);
        
        axios.post('http://localhost:3000/createPost', formData)
            .then(res => {
                console.log(res);
                navigate('/Feed');
            })
            .catch(err => {
                console.log(err);
            });
    } 

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
    };
    
    const handlePhoto = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setNewPost({...newPost, image: base64});
    }

    const handleCaptionChange = (e) => {
        setNewPost({...newPost, caption: e.target.value});
    }

    return (
        <div className={classes.centerContainer}>
            <h2 className={classes.header}>Create A New Post</h2>
                <div className={classes.container}>
                    <form className={classes.form} onSubmit={handleSubmit} encType="multipart/form-data" id="createNewPost">
                        <div>
                            <input 
                            type="file"
                            className="form-control"
                            accept=".png, .jpg, .jpeg"
                            name="photo" 
                            alt="Upload an image" 
                            onChange={handlePhoto}
                            />
                        </div>
                        <div>
                            <input 
                            type="text" 
                            id="caption" 
                            placeholder="Caption..." 
                            onChange={handleCaptionChange}
                            required
                            />
                        </div>
                        <button type="sumbit"> Create Post</button>
                    </form>
                </div>
        </div>
    )
}

export default CreateNewPost;


import React, {useState} from 'react';
import axios from 'axios';
import classes from "./pagesStyles/CreateNewPost.module.css";
import { useNavigate } from 'react-router-dom'
import NavBar from "../components/NavBar"


function CreateNewPost(props) {

    const navigate = useNavigate();

    const [newPost, setNewPost] = useState( {
        username: sessionStorage.getItem('user'),
        image: '',
        caption: '',
        likes: 0,
        comments: []
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', newPost.username)
        formData.append('image', newPost.image)
        formData.append('caption', newPost.caption)
        formData.append('likes', newPost.likes)
        formData.append('comments', newPost.comments)
        
        axios.post('http://localhost:3000/createPost', formData)
            .then(res => {
                const username = res.data.username
                const postId = res.data.postId

                updateUsersPosts(username, postId)
            })
            .catch(err => {
                console.log(err);
            });
    } 

    const updateUsersPosts = (username, postId) => {
        axios.post('http://localhost:3000/updateUsersPosts', {postId, username})
            .then(() => {
                console.log("user's posts updated")
                navigate('/Feed')
            })
            .catch(err => {
                console.log(err)
            })
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
        <div>
            <NavBar />
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
        </div>
    )
}

export default CreateNewPost;


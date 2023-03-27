import React, { useState, useEffect, useContext } from 'react';
import user3 from '../images/user3.jpg';
import './CreatePost.css';
import imageIcon from '../images/image_icon.png';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createPost } from '../graphql/mutations';
import LoginContext from '../context/LoginContext';

const CreatePost = ({ userData }) => {
  console.log('profile = ', userData);
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();
  const auth = useContext(LoginContext);
  console.log('status = ', auth.status);
  const sendPost = async () => {
    if (url) {
      console.log('url=', url);
      // saving post to AWS AppSync
      const newPost = {
        body: body,
        photo: url,
        //author: userData,
        userID: userData.userId,
      };
      console.log('new post data =', newPost);
      try {
        // const post = await API.graphql({
        //   query: createPost,
        //   variables: newPost,
        // });
        const post = await API.graphql(
          graphqlOperation(createPost, { input: newPost })
        );
        console.log('new post: ', post);
        notifySuccess('Post Created Successfully');
        navigate('/');
      } catch (error) {
        console.log('error = ', error);
        notifyError(error);
      }
    }
  };

  useEffect(() => {
    auth.user();
  }, []);

  // posting image to cloudinary
  const postDetails = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'instagram-clone');
    data.append('cloud_name', 'affable-digital-services');
    fetch(
      'https://api.cloudinary.com/v1_1/affable-digital-services/image/upload',
      {
        method: 'post',
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
    sendPost();
  };

  // image preview
  const loadfile = (event) => {
    let output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  // Toast functons
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);

  return (
    <div className="createPost">
      {/* header */}
      <div className="post-header">
        <h4 style={{ margin: '3px auto' }}>Create New Post</h4>
        <button
          id="post-btn"
          onClick={() => {
            postDetails();
          }}
        >
          Share
        </button>
      </div>

      {/* image preview */}

      <div className="main-div">
        <img src={imageIcon} alt="" id="output" />
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            loadfile(event);
            setImage(event.target.files[0]);
          }}
        />
      </div>
      {/* details */}
      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img src={user3} alt="" id="output" />
          </div>
          <h5>
            {userData.firstName} {userData.lastName}
          </h5>
        </div>

        <textarea
          placeholder="Write a caption"
          name=""
          id=""
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default CreatePost;

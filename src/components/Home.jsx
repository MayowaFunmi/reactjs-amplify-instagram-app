import React, { useContext, useEffect, useState } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import LoginContext from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { getComment, getPost, listPosts } from '../graphql/queries';
import { listComments } from '../graphql/queries';
import { createComment } from '../graphql/mutations';
import { updatePost } from '../graphql/mutations';
import './Home.css';
import user1 from '../images/user1.jpg';
import { toast } from 'react-toastify';
import Post from './Post';

const Home = ({ sub }) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [comment, setComment] = useState('');
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const auth = useContext(LoginContext);
  console.log('status = ', auth.status);

  useEffect(() => {
    auth.user();
  }, []);

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      navigate('/signin');
    }
    const allPosts = async () => {
      const getPosts = await API.graphql(graphqlOperation(listPosts));
      const getComments = await API.graphql(graphqlOperation(listComments));
      console.log('all comments: ', getComments);
      const data = getPosts.data.listPosts.items;
      const sortedPosts = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedPosts);
    };
    allPosts();
  }, [accessToken, navigate, refreshToken]);

  // show and hide comments
  const toggleComment = (posts) => {
    console.log(posts);
  };

  // all likes
  const viewLikes = (post) => {
    console.log(post);
  };

  // like posts
  const likePost = (id) => {
    console.log(id);
  };

  const unLikePost = (id) => {
    console.log(id);
  };

  console.log('posts = ', posts);
  return (
    <div className="home">
      {/* card */}
      {posts.map((post) => {
        return <Post post={post} sub={sub} />;
      })}
    </div>
  );
};

export default Home;

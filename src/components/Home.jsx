import React, { useContext, useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import LoginContext from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { listPosts } from '../graphql/queries';
import './Home.css';
import Post from './Post';

const Home = ({ sub }) => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const auth = useContext(LoginContext);
  //console.log('status = ', auth.status);

  useEffect(() => {
    auth.user();
  }, [auth]);

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      navigate('/signin');
    }
    const allPosts = async () => {
      const getPosts = await API.graphql(graphqlOperation(listPosts));
      const data = getPosts.data.listPosts.items;
      const sortedPosts = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedPosts);
    };
    allPosts();
  }, [accessToken, navigate, refreshToken]);

  //console.log('posts = ', posts);
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

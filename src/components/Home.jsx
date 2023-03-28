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

      {/* show comments */}
      {show && (
        <div className="showComment">
          <div className="container">
            <div className="postPic">
              <img src={item.photo} alt="" />
            </div>
            <div className="details">
              {/* card header */}
              <div
                className="card-header"
                style={{ borderBottom: '1px solid #00000029' }}
              >
                <div className="card-pic">
                  <img src={user1} alt="" />
                </div>
                <h5>{item.postedBy.name}</h5>
              </div>
              {/* comment section */}
              <div
                className="comment-section"
                style={{ borderBottom: '1px solid #00000029' }}
              >
                {item.comments.map((comment, index) => {
                  return (
                    <p className="comm" key={index}>
                      <span
                        className="commenter"
                        style={{ fontWeight: 'bolder' }}
                      >
                        {comment.postedBy.name}{' '}
                      </span>
                      <span className="commentText">{comment.comment}</span>
                    </p>
                  );
                })}
              </div>

              {/* card content */}
              <div className="card-content">
                {item.likes.length === 1 ? (
                  <p>{item.likes.length} Like</p>
                ) : (
                  <p>{item.likes.length} Likes</p>
                )}

                <p>{item.body}</p>
              </div>
              {/* comment */}
              <div className="add-comment">
                <span className="material-symbols-outlined">mood</span>
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  className="comment"
                  // onClick={() => {
                  //   makeComment(comment, item._id);
                  //   toggleComment();
                  // }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className="close-comment" onClick={() => toggleComment()}>
            <span className="material-symbols-outlined material-symbols-outlined-comment">
              close
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

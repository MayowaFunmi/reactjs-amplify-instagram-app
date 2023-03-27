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

  // function to make comments
  // update new comment in post model

  const updatedPost = async (post, postId, newComment) => {
    console.log(newComment);
    console.log(post);

    try {
      const updatedPostData = {
        id: postId,
        // comments: [
        //   ...post.comments.items,
        //   { id: newComment.data.createComment.id },
        // ],
        comments: { id: newComment.data.createComment.id },
      };
      const updatedPostResponse = await API.graphql(
        graphqlOperation(updatePost, { input: updatedPostData })
      );
      console.log('post updated: ', updatedPostResponse);
    } catch (error) {
      console.log('error updating post: ', error);
    }
  };

  // save new comments
  const makeComment = async (post, text, id) => {
    const commentParams = {
      input: { text: text, postID: id, userID: sub },
    };
    try {
      await API.graphql(graphqlOperation(createComment, commentParams));
      notifySuccess('Comment posted successfully');
      //await updatedPost(post, id, newComment);
      const result = await API.graphql(graphqlOperation(getPost, { id: id }));
      const postWithComments = result.data.getPost;
      console.log('post with comments = ', postWithComments);

      const postComments = postWithComments.comments.items; // access comments from post
      console.log('post comments = ', postComments);

      navigate('/');
    } catch (error) {
      console.log('error = ', error);
      notifyError(error);
    }
  };
  console.log('posts = ', posts);
  return (
    <div className="home">
      {/* card */}
      {posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            {/* card header */}
            <div className="card-header">
              <div className="card-pic">
                <img src={user1} alt="" />
              </div>
              <h5>{post.username}</h5>
            </div>
            {/* card image */}
            <div className="card-image">
              <img src={post.photo} alt="" />
            </div>
            <p>{post.body}</p>
            <p>{post.comments.items}</p>

            {/* card content */}
            {/* <div className="card-content">
              {post.likes.includes(
                JSON.parse(localStorage.getItem('user'))._id
              ) ? (
                <span
                  className="material-symbols-outlined red"
                  onClick={() => {
                    unLikePost(post._id);
                  }}
                >
                  favorite
                </span>
              ) : (
                <span
                  className="material-symbols-outlined"
                  onClick={() => {
                    likePost(post._id);
                  }}
                >
                  favorite
                </span>
              )}

              {post.likes.length === 0 ? (
                <p>{post.likes.length} Likes</p>
              ) : post.likes.length === 1 ? (
                <p
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => viewLikes(post)}
                >
                  {post.likes.length} Like
                </p>
              ) : (
                <p
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => viewLikes(post)}
                >
                  {post.likes.length} Likes
                </p>
              )}

              <p>{post.body}</p>
              {post.comments.length === 1 ? (
                <p
                  style={{ cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => toggleComment(post)}
                >
                  View {post.comments.length} comment
                </p>
              ) : post.comments.length === 0 ? (
                <p
                  style={{ cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => toggleComment(post)}
                >
                  Be the first to comment
                </p>
              ) : (
                <p
                  style={{ cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => toggleComment(post)}
                >
                  View all {post.comments.length} comments
                </p>
              )}
            </div> */}

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
                onClick={() => makeComment(post, comment, post.id)}
              >
                Reply
              </button>
            </div>
          </div>
        );
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
                  onClick={() => {
                    makeComment(comment, item._id);
                    toggleComment();
                  }}
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

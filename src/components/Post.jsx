import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createComment } from '../graphql/mutations';
import { getPost } from '../graphql/queries';
import user1 from '../images/user1.jpg';
import './Home.css';

const Post = ({ post, sub }) => {
  const [comment, setComment] = useState('');
  const [comment2, setComment2] = useState('');
  const [postId, setPostId] = useState({});
  const [postComment, setPostComment] = useState([]);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const navigate = useNavigate();

  useEffect(() => {
    setPostId(post.id);
  }, [post.id]);

  useEffect(() => {
    const getComments = async (id) => {
      console.log('postId = ', postId);
      const result = await API.graphql(graphqlOperation(getPost, { id: id }));
      const postWithComments = result.data.getPost;
      //console.log('post with comments = ', postWithComments);
      const postComments = postWithComments.comments.items; // access comments from post
      setPostComment(postComments);
      //console.log('post comments = ', postComment);
    };
    getComments(postId);
  }, [postComment, postId]);

  const toggleComment = (post) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
      setItem(post);
    }
  };

  // save new comments
  const makeComment = async (text, id) => {
    const commentParams = {
      input: { text: text, postID: id, userID: sub },
    };
    try {
      await API.graphql(graphqlOperation(createComment, commentParams));
      notifySuccess('Comment posted successfully');
      navigate('/');
    } catch (error) {
      console.log('error = ', error);
      notifyError(error);
    }
  };

  return (
    <>
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
        {postComment.length === 1 ? (
          <p
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => toggleComment(post)}
          >
            View {postComment.length} comment
          </p>
        ) : postComment.length === 0 ? (
          <p
            style={{ cursaor: 'pointer', fontWeight: 'bold' }}
            onClick={() => toggleComment(post)}
          >
            Be the first to comment
          </p>
        ) : (
          <p
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => toggleComment(post)}
          >
            View all {postComment.length} comments
          </p>
        )}
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
            onClick={() => makeComment(comment, post.id)}
          >
            Reply
          </button>
        </div>
      </div>

      {/* Shiw comments */}

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
                <h5>
                  {item.firstName} {item.lastName}
                </h5>
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
                  value={comment2}
                  onChange={(e) => setComment2(e.target.value)}
                />
                <button
                  className="comment"
                  onClick={() => {
                    makeComment(comment2, item.id);
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
    </>
  );
};

export default Post;

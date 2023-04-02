import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createComment, createLike, deleteLike } from '../graphql/mutations';
import { getPost, listUsers } from '../graphql/queries';
import user1 from '../images/user1.jpg';
import './Home.css';
import Comments from './Comments';

const Post = ({ post, sub }) => {
  const [comment, setComment] = useState('');
  const [comment2, setComment2] = useState('');
  const [postId, setPostId] = useState({});
  const [postComment, setPostComment] = useState([]);
  const [postLikes, setPostLikes] = useState([]);
  const [postWithComment, setPostWithComment] = useState({});
  const [like, setLike] = useState({});
  const [show, setShow] = useState(false);
  const [userLike, setUserLike] = useState(false);
  const [item, setItem] = useState({});
  const [user, setUser] = useState({});
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const navigate = useNavigate();

  useEffect(() => {
    setPostId(post.id);
    const getComments = async (id) => {
      const result = await API.graphql(graphqlOperation(getPost, { id: id }));
      const postData = result.data.getPost;
      setPostWithComment(postData);
      //console.log('post with comments = ', postData);
      const postComments = postData.comments.items; // access comments from post
      //console.log('post comments 1= ', postComments);
      setPostComment(postComments);
      //console.log('post comments = ', postComment);
      const postLikes = postData.likes.items;
      //console.log('post likes = ', postLikes);
      //setPostLikes(postLikes);
      // iterate to check if user already likes post
      //if set to true if user like present
      for (let i = 0; i < postLikes.length; i++) {
        if (postLikes[i].userID === sub) {
          setUserLike(true);
          break;
        }
      }
    };
    const userDetails = async (id) => {
      const users = await API.graphql(graphqlOperation(listUsers));
      const usersArr = users.data.listUsers.items;
      for (let i = 0; i < usersArr.length; i++) {
        if (usersArr[i].userId === id) {
          setUser(usersArr[i]);
          break;
        } //else {
        //   notifyError('user not found!');
        // }
      }
    };
    getComments(postId);
    userDetails(postWithComment.userID);
    //setShow(false);
  }, [post.id, postId, post.userID, postComment, postWithComment, sub]);

  const toggleComment = (currentPost) => {
    if (show) {
      setShow(false);
      //setItem([]);
    } else {
      setShow(true);
      setItem(currentPost);
    }
    // console.log('show1 = ', show);
    // console.log('currentPost = ', currentPost);
    // setShow(true);
    // setItem(currentPost);
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

  const likePost = async (userId, postId) => {
    const postParams = {
      input: { userID: sub, postID: postId },
    };
    try {
      const likePost = await API.graphql(
        graphqlOperation(createLike, postParams)
      );
      console.log('likePost = ', likePost);
      setLike(likePost.data.createLike);
      console.log('like = ', like);
      notifySuccess('You like this post!');
    } catch (error) {
      console.log('error = ', error);
      notifyError(error);
    }
  };

  const unlikePost = async (userId, postId) => {
    // const postParams = {
    //   input: { userID: sub, postID: postId },
    // };
    console.log('like = ', like);
    const postParams = {
      input: {
        id: like.id,
      },
    };
    try {
      await API.graphql(graphqlOperation(deleteLike, postParams));
      setUserLike(false);
      notifySuccess('You hate this post!');
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
          <h5>{user.username}</h5>
        </div>
        {/* card image */}
        <div className="card-image">
          <img src={post.photo} alt="" />
        </div>

        {/* card content */}
        <div className="card-content">
          {userLike ? (
            <span
              className="material-symbols-outlined red"
              onClick={() => {
                unlikePost(post.userID, post.id);
              }}
            >
              favorite
            </span>
          ) : (
            <span
              className="material-symbols-outlined"
              onClick={() => {
                likePost(post.userID, post.id);
              }}
            >
              favorite
            </span>
          )}
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

      {/* Show comments */}
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
                  {user.firstName} {user.lastName}
                </h5>
              </div>
              {/* comment section */}
              <div
                className="comment-section"
                style={{ borderBottom: '1px solid #00000029' }}
              >
                {postComment.map((com, index) => {
                  return <Comments com={com} index={index} />;
                })}
              </div>

              {/* card content for likes */}

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
                    makeComment(comment2, post.id);
                    toggleComment();
                  }}
                >
                  Add Comment
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

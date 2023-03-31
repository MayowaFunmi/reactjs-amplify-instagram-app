import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createComment } from '../graphql/mutations';
import { getPost, listUsers } from '../graphql/queries';
import user1 from '../images/user1.jpg';
import './Home.css';

const Post = ({ post, sub }) => {
  const [comment, setComment] = useState('');
  const [comment2, setComment2] = useState('');
  const [postId, setPostId] = useState({});
  const [postComment, setPostComment] = useState([]);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});
  const [user, setUser] = useState({});
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const navigate = useNavigate();
  useEffect(() => {
    setPostId(post.id);
    const getComments = async (id) => {
      const result = await API.graphql(graphqlOperation(getPost, { id: id }));
      const postWithComments = result.data.getPost;
      //console.log('post with comments = ', postWithComments);
      const postComments = postWithComments.comments.items; // access comments from post
      setPostComment(postComments);
      console.log('post comments = ', postComment);
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
    userDetails(post.userID);
    setShow(false);
  }, [post.id, postId, post.userID]);

  const toggleComment = (currentPost) => {
    console.log('show1 = ', show);
    console.log('currentPost = ', currentPost);
    setShow(true);
    setItem(currentPost);
    //console.log('item = ', item);
    //console.log('show1 = ', show);
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
          <h5>{user.username}</h5>
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
                {}
              </div>

              {/* card content for likes */}

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
    </>
  );
};

export default Post;

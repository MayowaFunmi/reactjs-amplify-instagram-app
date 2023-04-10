import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { useParams, useNavigate } from 'react-router-dom';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser, postsByUserID, usersByUserId } from '../graphql/queries';
import { createFollower, deleteFollower } from '../graphql/mutations';
import { toast } from 'react-toastify';

const UserProfileDetails = () => {
  var picLink = 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png';
  const { userid } = useParams();
  const [users, setUsers] = useState({});
  const [userPost, setUserPost] = useState([]);
  const [isFollow, setIsFollow] = useState(false);
  const [follower, setFollower] = useState({});
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetail = async () => {
      try {
        const post = await API.graphql(
          graphqlOperation(postsByUserID, { userID: userid })
        );
        const user = await API.graphql(
          graphqlOperation(usersByUserId, { userId: userid })
        );
        setUserPost(post.data.postsByUserID.items);
        setUsers(user.data.usersByUserId.items[0]);
        console.log('post = ', userPost);
        console.log('user = ', users);

        //console.log('users = ', users);
      } catch (error) {
        console.log('user error = ', error);
      }
    };
    getUserDetail();
  }, [userid, userPost, users]);

  // to follow user
  const followUser = async () => {
    const authenticated_user = await Auth.currentAuthenticatedUser(); // username, other attributes - email, sub
    const id = authenticated_user.attributes.sub;
    const followerParams = {
      input: { userID: id },
    };
    try {
      const follow = await API.graphql(
        graphqlOperation(createFollower, followerParams)
      );
      setIsFollow(true);
      setFollower(follow.data.createFollower);
      notifySuccess('You are followingfollow this user!');
      console.log('follow = ', follow);
      console.log('follower = ', follower);
    } catch (error) {
      console.log('error = ', error);
      notifyError(error);
    }
  };

  // to unfollow user
  const unFollowUser = async () => {
    console.log('follower = ', follower);
    const unfollowerParams = {
      input: { id: follower.id },
    };
    try {
      await API.graphql(graphqlOperation(deleteFollower, unfollowerParams));
      setIsFollow(false);
      notifySuccess('You unfollow this user!');
    } catch (error) {
      console.log('error = ', error);
      notifyError(error);
    }
  };

  return (
    <div className="profile">
      {/* Profile frame */}
      <div className="profile-frame">
        {/* profile-pic */}
        <div className="profile-pic">
          <img src={users.photo ? users.photo : picLink} alt="" />
        </div>
        {/* profile-data */}
        <div className="pofile-data">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h1>
              {users.firstName} {users.lastName}
            </h1>
            <button
              className="followBtn"
              onClick={() => {
                if (isFollow) {
                  unFollowUser();
                } else {
                  followUser();
                }
              }}
            >
              {isFollow ? 'Unfollow' : 'Follow'}
            </button>
          </div>
          <div className="profile-info" style={{ display: 'flex' }}>
            <p>{userPost.length} posts</p>
            {/* <p>
              {users.followers ? users.followers.items.length : '0'} followers
            </p>
            <p>
              {users.following.items ? users.following.items.length : '0'}{' '}
              following
            </p> */}
          </div>
        </div>
      </div>
      <hr
        style={{
          width: '90%',

          opacity: '0.8',
          margin: '25px auto',
        }}
      />
      {/* Gallery */}
      <div className="gallery">
        {userPost.map((post) => {
          return (
            <img
              key={post.id}
              src={post.photo}
              // onClick={() => {
              //     toggleDetails(pics)
              // }}
              className="item"
              alt=""
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default UserProfileDetails;

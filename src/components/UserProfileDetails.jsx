import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { useParams, useNavigate } from 'react-router-dom';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {
  followersByOwner,
  getUser,
  postsByUserID,
  usersByUserId,
} from '../graphql/queries';
import { createFollower, deleteFollower } from '../graphql/mutations';
import { toast } from 'react-toastify';

const UserProfileDetails = ({ sub }) => {
  console.log('sub = ', sub);
  var picLink = 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png';
  const { userid } = useParams();
  const [users, setUsers] = useState({});
  const [userFol, setUserFol] = useState([]);
  const [userPost, setUserPost] = useState([]);
  const [isFollower, setIsFollower] = useState(false);
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
        const userfol = await API.graphql(
          graphqlOperation(followersByOwner, { owner: userid })
        );
        setUserFol(userfol.data.followersByOwner.items);
        setUserPost(post.data.postsByUserID.items);
        setUsers(user.data.usersByUserId.items[0]);
        console.log('post = ', userPost);
        console.log('user = ', users);
        console.log('userFol = ', userfol);
        // loop through the userFol to check if current user already following the user being checked
        for (let i = 0; i < userFol.length; i++) {
          if (userFol[i].userID === sub) {
            setFollower(userFol[i]);
            setIsFollower(true);
            console.log('userFol[i] = ', userFol[i]);
            break;
          }
        }
        //console.log('users = ', users);
      } catch (error) {
        console.log('user error = ', error);
      }
    };
    getUserDetail();
  }, [userid, userPost, users, sub, userFol]);

  // to follow user
  const followUser = async () => {
    const followerParams = {
      input: { owner: userid, userID: sub },
    };
    try {
      const follow = await API.graphql(
        graphqlOperation(createFollower, followerParams)
      );
      //setFollower(follow.data.createFollower);
      setIsFollower(true);
      notifySuccess('You are following this user!');
      console.log('follow = ', follow);
      //console.log('follower = ', follower);
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
      setIsFollower(false);
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
            {/* if userid in userFol, show unfollow, else show follow */}
            <p>{userFol.length} followers</p>
            {isFollower ? (
              <button className="followBtn" onClick={() => unFollowUser()}>
                Unfollow
              </button>
            ) : (
              <button className="followBtn" onClick={() => followUser()}>
                Follow
              </button>
            )}
            {/* <button
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
            </button> */}
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

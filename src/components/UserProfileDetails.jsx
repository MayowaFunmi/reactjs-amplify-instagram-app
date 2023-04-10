import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { useParams, useNavigate } from 'react-router-dom';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser, usersByUserId } from '../graphql/queries';
import { createFollower, deleteFollower } from '../graphql/mutations';
import { toast } from 'react-toastify';

const UserProfileDetails = () => {
  var picLink = 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png';
  const { userid } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [isFollow, setIsFollow] = useState(false);
  const [follower, setFollower] = useState({});
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetail = async () => {
      try {
        const user = await API.graphql(
          graphqlOperation(usersByUserId, { userId: userid })
        );
        setUserDetails(user.data.usersByUserId[0]);
        console.log('users = ', user);
        console.log('userDetails = ', userDetails);
      } catch (error) {
        console.log('user error = ', error);
      }
    };
    getUserDetail();
  }, []);

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
        {/* <div className="profile-pic">
          <img src={userDetails.photo ? userDetails.photo : picLink} alt="" />
        </div> */}
        {/* profile-data */}
        <div className="pofile-data">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* <h1>
              {userDetails.firstName} {userDetails.lastName}
            </h1> */}
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
          {/* <div className="profile-info" style={{ display: 'flex' }}>
            <p>{userDetails.posts.items.length} posts</p>
            <p>
              {userDetails.followers.items
                ? userDetails.followers.items.length
                : '0'}{' '}
              followers
            </p>
            <p>
              {userDetails.following.items
                ? userDetails.following.items.length
                : '0'}{' '}
              following
            </p>
          </div> */}
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
      {/* <div className="gallery">
        {userDetails.posts.items.map((post) => {
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
      </div> */}
    </div>
  );
};

export default UserProfileDetails;

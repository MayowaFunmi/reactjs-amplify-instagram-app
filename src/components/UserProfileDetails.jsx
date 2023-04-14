import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import {
  followersByOwner,
  listFollowers,
  postsByUserID,
  usersByUserId,
} from '../graphql/queries';
import { createFollower, deleteFollower } from '../graphql/mutations';
import { toast } from 'react-toastify';

const UserProfileDetails = ({ sub }) => {
  var picLink = 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png';
  const { userid } = useParams();
  const [users, setUsers] = useState({});
  const [userFol, setUserFol] = useState([]);
  const [userPost, setUserPost] = useState([]);
  const [isFollower, setIsFollower] = useState(false);
  const [follower, setFollower] = useState({});
  const [following, setFollowing] = useState(0);
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);

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
       
        // loop through the userFol to check if current user already following the user being checked
        for (let i = 0; i < userFol.length; i++) {
          if (userFol[i].userID === sub) {
            setFollower(userFol[i]);
            setIsFollower(true);
            break;
          }
        }

        const all_follows = await API.graphql(graphqlOperation(listFollowers))
          const all = all_follows.data.listFollowers.items
          var f = []
          for (let i=0; i<all.length; i++) {
            if (all[i].userID === userid) {
              f.push(all[i])
            }
          }
          setFollowing(f.length)
      } catch (error) {
        notifyError(error)
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
      await API.graphql(
        graphqlOperation(createFollower, followerParams)
      );
      //setFollower(follow.data.createFollower);
      setIsFollower(true);
      notifySuccess('You are following this user!');
      //console.log('follower = ', follower);
    } catch (error) {
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
           
            <p><strong>{userFol.length} <br /> Followers</strong></p>
            <p><strong>{following} <br /> Following</strong></p>
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
            <p><strong>{userPost.length}</strong> Posts</p>

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

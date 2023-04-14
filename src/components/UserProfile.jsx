import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { API, graphqlOperation } from 'aws-amplify';
import { followersByOwner, listFollowers, postsByUserID } from '../graphql/queries';

const UserProfile = ({ profile }) => {
  var picLink = 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png';
  const [follow, setFollow] = useState(0);
  const [following, setFollowing] = useState(0);
  const [userPost, setUserPost] = useState([])

  useEffect(() => {
    const getPosts = async() => {
      const posts = await API.graphql(graphqlOperation(postsByUserID, {userID: profile.userId}))
      setUserPost(posts.data.postsByUserID.items);
    }
    const getfollowers = async () => {
      const followers = await API.graphql(graphqlOperation(followersByOwner, {owner: profile.userId}))
      setFollow(followers.data.followersByOwner.items.length)
    }
  
    const getfollowings = async () => {
      const all_follows = await API.graphql(graphqlOperation(listFollowers))
      const all = all_follows.data.listFollowers.items
      var f = []
      for (let i=0; i<all.length; i++) {
        if (all[i].userID === profile.userId) {
          f.push(all[i])
        }
      }
      setFollowing(f.length)
    }
    getfollowers()
    getfollowings()
    getPosts()
  }, [profile])

  return (
    <div className="profile">
      {/* profile frame */}
      <div className="profile-frame">
        <div className="profile-pic">
          <img src={profile.photo ? profile.photo : picLink} alt="" />
        </div>
        {/* profile data */}
        <div className="profile-data">
          <h1>
            {profile.lastName} {profile.firstName}
          </h1>
          <div className="profile-info" style={{ display: 'flex' }}>
            {/* <p><strong>Gender: {profile.gender}</strong></p>
            <p><strong>Bio: {profile.bio}</strong></p>
            <p><strong>Location: {profile.location}</strong></p>
            <p>
             <strong> Date Of Birth:
              {new Date(profile.dateOfBirth).toLocaleDateString()}</strong>
            </p>
            <p><strong>Privacy: {profile.privacy}</strong></p> */}
            <p><strong>{userPost.length} <br /> Posts</strong></p>
            <p><strong>{follow} <br /> Followers</strong></p>
            <p><strong>{following} <br /> Following</strong></p>
          </div>
        </div>
      </div>
      <hr style={{ width: '90%', margin: '25px auto', opacity: '0.8' }} />
      {/* Gallery */}
      <div className="gallery">
        {userPost.map((post) => {
          return (
            <img
              key={post.id}
              src={post.photo}
              className="item"
              alt=""
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;

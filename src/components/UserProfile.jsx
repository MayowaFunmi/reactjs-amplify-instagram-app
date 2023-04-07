import React from 'react';
import './UserProfile.css';
//import user2 from '../images/user2.jpg';

const UserProfile = ({ profile }) => {
  console.log('profile = ', profile);
  return (
    <div className="profile">
      {/* profile frame */}
      <div className="profile-frame">
        <div className="profile-pic">
          <img src={profile.photo} alt="" />
        </div>
        {/* profile data */}
        <div className="profile-data">
          <p>
            Name: {profile.lastName} {profile.firstName}
          </p>
          <p>Gender: {profile.gender}</p>
          <p>Bio: {profile.bio}</p>
          <p>Location: {profile.location}</p>
          <p>
            Date Of Birth: {new Date(profile.dateOfBirth).toLocaleDateString()}
          </p>
          <p>Privacy: {profile.privacy}</p>

          <div className="profile-info" style={{ display: 'flex' }}>
            <p>40 posts</p>
            <p>50 followers</p>
            <p>20 following</p>
          </div>
        </div>
      </div>
      <hr style={{ width: '90%', margin: '25px auto', opacity: '0.8' }} />
      {/* Gallery */}
      <div className="gallery">show gallery pics here :::</div>
      {/* {show && <PostDetail item={post} toggleDetails={toggleDetails} />} */}
    </div>
  );
};

export default UserProfile;

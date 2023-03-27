import React from 'react';
import './UserProfile.css';
import user2 from '../images/user2.jpg';

const UserProfile = ({ profile }) => {
  console.log('profile = ', profile);
  return (
    <div className="profile">
      {/* profile frame */}
      <div className="profile-frame">
        <div className="profile-pic">
          <img src={user2} alt="" />
        </div>
        {/* profile data */}
        <div className="profile-data">
          <h1>
            {profile.lastName} {profile.firstName}
          </h1>
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

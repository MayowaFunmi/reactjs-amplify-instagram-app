import React, { useContext, useEffect, useState } from 'react';
import './SignUp.css';
import logo from '../images/logo.jpeg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { API, Auth } from 'aws-amplify';
import { createUser } from '../graphql/mutations';
import UserProfile from './UsesrProfile';
import LoginContext from '../context/LoginContext';

const Profile = ({ userData, sub }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  //const [photo, setPhoto] = useState(0);
  const [location, setLocation] = useState('');
  const [privacy, setPrivacy] = useState('');

  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const navigate = useNavigate();

  const auth = useContext(LoginContext);
  console.log('data = ', userData);
  console.log('status = ', auth.status);

  useEffect(() => {
    auth.user();
  }, []);

  const handleProfile = async () => {
    if (auth.status === false) {
      const authenticated_user = await Auth.currentAuthenticatedUser(); // username, other attributes - email, sub

      const userProfile = {
        input: {
          userId: sub,
          username: authenticated_user.username,
          firstName: firstName,
          lastName: lastName,
          bio: bio,
          email: email,
          location: location,
          privacy: privacy,
        },
      };
      console.log(userProfile);
      try {
        const newUser = await API.graphql({
          query: createUser,
          variables: userProfile,
        });
        //console.log('auth user = ', newAuthUser);
        console.log('new user = ', newUser);
        notifySuccess('User Created Successfully!!');
        navigate('/');
      } catch (error) {
        console.log('error = ', error);
        notifyError(error);
      }
    } else {
      notifyError('User not found on users list');
      //navigate('/signin');
    }
  };

  return (
    <div className="signUp">
      <div className="form-container">
        {!auth.status ? (
          <div className="form">
            <img className="signUpLogo" src={logo} alt="" />
            <p className="loginPara">Create Your Profile</p>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="text"
                name="bio"
                placeholder="Bio"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                type="text"
                name="location"
                placeholder="Your Address"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                type="text"
                name="privacy"
                placeholder="Set your privacy: private or public"
                value={privacy}
                onChange={(e) => {
                  setPrivacy(e.target.value);
                }}
              />
            </div>

            <input
              type="submit"
              id="submit-btn"
              value="submit Profile"
              onClick={() => handleProfile()}
            />
          </div>
        ) : (
          <UserProfile profile={userData} />
        )}
      </div>
    </div>
  );
};

export default Profile;

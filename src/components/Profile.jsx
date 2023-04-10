import React, { useContext, useEffect, useState } from 'react';
import './SignUp.css';
import logo from '../images/logo.jpeg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { API, Auth } from 'aws-amplify';
import { createUser } from '../graphql/mutations';
import UserProfile from './UserProfile';
import LoginContext from '../context/LoginContext';
import imageIcon from '../images/image_icon.png';

const Profile = ({ userData }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [url, setUrl] = useState('');
  const [location, setLocation] = useState('');
  const [privacy, setPrivacy] = useState('');

  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const navigate = useNavigate();

  const auth = useContext(LoginContext);
  //console.log('data = ', userData);
  console.log('status = ', auth.status);

  useEffect(() => {
    auth.user();
  }, []);

  // posting image to cloudinary
  const postDp = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'instagram-clone');
    data.append('cloud_name', 'affable-digital-services');
    fetch(
      'https://api.cloudinary.com/v1_1/affable-digital-services/image/upload',
      {
        method: 'post',
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
    handleProfile();
  };

  const handleProfile = async () => {
    if (auth.status === false) {
      const authenticated_user = await Auth.currentAuthenticatedUser(); // username, other attributes - email, sub

      const userProfile = {
        input: {
          userId: authenticated_user.attributes.sub,
          username: authenticated_user.username,
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          bio: bio,
          location: location,
          email: email,
          photo: url,
          dateOfBirth: dateOfBirth,
          privacy: privacy,
        },
      };
      console.log('userProfile = ', userProfile);
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

  // image preview
  const loadfile = (event) => {
    let output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
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
                name="gender"
                placeholder="Gender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
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

            <div>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
              />
            </div>

            <div>
              <img src={imageIcon} alt="" id="output" />
              <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                  loadfile(event);
                  setImage(event.target.files[0]);
                }}
              />
            </div>

            <input
              type="submit"
              id="submit-btn"
              value="submit Profile"
              onClick={() => postDp()}
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

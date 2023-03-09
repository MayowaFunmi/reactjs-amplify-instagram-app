import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpeg';
import './SignUp.css';
import { toast } from 'react-toastify';
//import Confirmation from './Confirmation';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const navigate = useNavigate();

  async function handleSignUp(e) {
    //e.preventDefault();
    if (password !== confirmPassword) {
      notifyError("Passwords don't match!!!");
      return;
    }
    if (!emailRegex.test(email)) {
      notifyError('Email is invalid!!!');
      return;
    }
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log('user signup = ', user.username);
      //notifySuccess('Sign up successful!!!');
      if (user) {
        const data = { username: username, user: user };
        console.log('data = ', data);
        notifySuccess('Checking for confirmation');
        navigate('/confirmation', { state: data });
        //return <Confirmation username={username} user={user} />;
      }
    } catch (error) {
      notifyError(error);
      console.log('error = ', error);
    }
  }

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form">
          <img className="signUpLogo" src={logo} alt="" />
          <p className="loginPara">
            Sign up to see photos and videos <br /> from your friends
          </p>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <p
            className="loginPara"
            style={{ fontSize: '12px', margin: '3px 0px' }}
          >
            By signing up, you agree to our terms, <br /> privacy policy and
            cookies policy
          </p>
          <input
            type="submit"
            id="submit-btn"
            value="Sign Up"
            onClick={() => handleSignUp()}
          />
        </div>

        <div className="form2">
          Already have an account?
          <Link to="/signin">
            <span style={{ color: 'blue', cursor: 'pointer' }}>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

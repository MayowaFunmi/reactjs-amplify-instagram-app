import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/insta-logo.jpeg';
import { toast } from 'react-toastify';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  //const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    const { username, password } = formData;
    try {
      const signInResponse = await Auth.signIn(username, password);
      //console.log('SignInResponse = ', signInResponse);
      const userSession = await Auth.currentSession();
      localStorage.setItem('accessToken', userSession.accessToken.jwtToken);
      localStorage.setItem('refreshToken', userSession.refreshToken.token);
      notifySuccess('Login Successful!!!');
      navigate('/profile');
    } catch (error) {
      notifyError(error);
    }
  };

  return (
    <div className="signIn">
      <div>
        <div className="loginForm">
          <img className="signUpLogo" src={logo} alt="" />
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            id="login-btn"
            value="LogIn"
            onClick={() => {
              handleSubmit();
            }}
          />
        </div>
        <div className="loginForm2">
          Don't have an account?
          <Link to="/signup">
            <span style={{ color: 'blue', cursor: 'pointer' }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

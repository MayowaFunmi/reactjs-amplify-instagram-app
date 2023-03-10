import { Auth } from 'aws-amplify';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Navbar.css';
import logo from '../images/insta-logo.jpeg';

const Navbar = () => {
  const navigate = useNavigate();
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);

  const logoutUser = async () => {
    try {
      await Auth.signOut();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      notifySuccess('You are logged out!!!');
      navigate('/signin');
    } catch (error) {
      notifyError('something went wrong');
      console.log('error: ', error);
    }
  };
  const loginStatus = () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken || refreshToken) {
      return [
        <>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Profile</li>
          </Link>
          <Link to="/">
            <li>Create Post</li>
          </Link>
          <Link to="/">
            <li>Change Password</li>
          </Link>
          <Link to="/">
            <button className="primaryBtn" onClick={() => logoutUser()}>
              Logout
            </button>
          </Link>
        </>,
      ];
    } else {
      return [
        <>
          <Link to="/signup">
            <li>SignUp</li>
          </Link>
          <Link to="/signin">
            <li>Login</li>
          </Link>
        </>,
      ];
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">{loginStatus()}</ul>
    </div>
  );
};

export default Navbar;

import { Auth } from 'aws-amplify';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const logoutUser = async () => {
    try {
      await Auth.signOut();
      notifySuccess('You are logged out!!!');
      navigate('/signin');
    } catch (error) {
      notifyError('something went wrong');
      console.log('error: ', error);
    }
  };
  return (
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
        <button className="primaryBtn" onClick={() => logoutUser()}>
          Logout
        </button>
      </Link>
    </>
  );
};

export default Navbar;

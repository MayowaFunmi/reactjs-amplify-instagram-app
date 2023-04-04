import React, { useState } from 'react';
import logo from '../images/insta-logo.jpeg';
import { toast } from 'react-toastify';
import './SignIn.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const navigate = useNavigate();

  const changePassword = (oldPassword, newPassword, confirmPassword) => {
    if (newPassword !== confirmPassword) {
      notifyError('New passwords do not match!!!');
      return;
    }

    Auth.currentAuthenticatedUser()
      .then((user) => {
        return Auth.changePassword(user, oldPassword, newPassword);
      })
      .then((data) => notifySuccess(`Password Reset status: ${data}`))
      .catch((err) => console.log(err));
    navigate('/profile');
  };

  return (
    <>
      <div className="form">
        <img className="signUpLogo" src={logo} alt="" />
        <p className="loginPara">Change Your password</p>
        <div>
          <input
            type="text"
            name="code"
            placeholder="Enter your old password"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            type="password"
            name="code"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          id="submit-btn"
          value="Reset Password"
          onClick={() =>
            changePassword(oldPassword, newPassword, confirmPassword)
          }
        />
      </div>
    </>
  );
};

export default ChangePassword;

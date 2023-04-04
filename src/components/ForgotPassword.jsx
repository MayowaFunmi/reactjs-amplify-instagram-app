import React, { useState } from 'react';
import logo from '../images/insta-logo.jpeg';
import { toast } from 'react-toastify';
import './SignIn.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState(false);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const notifyError = (msg) => toast.error(msg);
  const notifySuccess = (msg) => toast.success(msg);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // Send confirmation code to user's email
    Auth.forgotPassword(username)
      .then((data) =>
        notifySuccess(
          `Password reset code has been set to your email: ${data.CodeDeliveryDetails.Destination}`
        )
      )
      .catch((err) => console.log(err));
    setStatus(true);
  };

  const resetPassword = (username, code, newPassword) => {
    if (newPassword !== confirmNewPassword) {
      notifyError("Passwords don't match!!!");
      return;
    }
    // Collect confirmation code and new password, then
    Auth.forgotPasswordSubmit(username, code, newPassword)
      .then((data) => notifySuccess(`Password Reset status: ${data}`))
      .catch((err) => console.log(err));
    navigate('/signin');
  };

  return (
    <>
      {!status ? (
        <div className="signIn">
          <div>
            <div className="loginForm">
              <img className="signUpLogo" src={logo} alt="" />
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>

              <input
                type="submit"
                id="login-btn"
                value="Get Reset Password Code"
                onClick={() => {
                  handleSubmit();
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="form">
          <img className="signUpLogo" src={logo} alt="" />
          <p className="loginPara">New password</p>
          <div>
            <input
              type="text"
              name="code"
              placeholder="Enter password reset code sent to your email"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
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
              value={confirmNewPassword}
              onChange={(e) => {
                setConfirmNewPassword(e.target.value);
              }}
            />
          </div>

          <input
            type="submit"
            id="submit-btn"
            value="Reset Password"
            onClick={() => resetPassword(username, code, newPassword)}
          />
        </div>
      )}
    </>
  );
};

export default ForgotPassword;

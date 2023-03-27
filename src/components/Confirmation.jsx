import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import logo from '../images/logo.jpeg';
import './SignUp.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Confirmation = () => {
  const [confirmationCode, setConfirmationCode] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);
  console.log(location);
  const { username, user } = location.state || {};

  async function confirmUser(username, confirmationCode) {
    try {
      await Auth.confirmSignUp(username, confirmationCode);
      console.log('User confirmed = ', user);
      notifySuccess('Sign up completed succesfully!!!');
      navigate('/signin');
    } catch (error) {
      notifyError(error);
      //console.log('Error confirming user: ', error);
    }
  }

  return (
    <div className="signUp">
      <div className="form-container">
        <div className="form">
          <img className="signUpLogo" src={logo} alt="" />
          <p className="loginPara">
            Enter the confirmation code sent to your email address
          </p>
          <div>
            <input
              type="text"
              name="code"
              placeholder="Enter confirmation code"
              value={confirmationCode}
              onInput={(e) => {
                setConfirmationCode(e.target.value);
              }}
            />
          </div>

          <input
            type="submit"
            id="submit-btn"
            value="Sign Up"
            onClick={() => confirmUser(username, confirmationCode)}
          />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;

//2a000204-620c-44a0-990b-f337fcd5b0bb

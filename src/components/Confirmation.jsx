import React from 'react';
import { Auth } from 'aws-amplify';

const Confirmation = () => {
  async function confirmUser(username, confirmationCode) {
  try {
    await Auth.confirmSignUp(username, confirmationCode);
    console.log('User confirmed');
  } catch (error) {
    console.log('Error confirming user: ', error);
  }
  
  return <div>Confirmation</div>;
};

export default Confirmation;

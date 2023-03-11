import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';

const Home = () => {
  const getData = async () => {
    const user = await Auth.currentAuthenticatedUser(); // username, other attributes - email, sub
    const {attributes} = user;
    const userInfo = await Auth.currentUserInfo(); // attributes - email, sub, id, username
    const userSession = await Auth.currentSession();
    console.log('user = ', user);
    console.log('attributes = ', attributes);

    console.log('userInfo = ', userInfo);
    console.log('userSession = ', userSession);
  };
  useEffect(() => {
    getData();
  });
  return <div>Home</div>;
};

export default Home;

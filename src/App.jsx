import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { listUsers } from './graphql/queries';
import LoginContext from './context/LoginContext';
import Modal from './components/Modal';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';
import UserProfileDetails from './components/UserProfileDetails';

const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

const App = () => {
  const [userSub, setUserSub] = useState('');
  const [userData, setUserData] = useState({});
  const [authStatus, setAuthStatus] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const checkUser = async () => {
    if (accessToken || refreshToken) {
      const authenticated_user = await Auth.currentAuthenticatedUser(); // username, other attributes - email, sub
      if (authenticated_user) {
        setUserSub(authenticated_user.attributes.sub);
      }
      const users = await API.graphql(graphqlOperation(listUsers));
      console.log('all users = ', users.data.listUsers.items);
      try {
        const usersArr = users.data.listUsers.items;
        console.log('users found = ', users.data.listUsers.items);
        for (let i = 0; i < usersArr.length; i++) {
          if (usersArr[i].userId === userSub) {
            setUserData(usersArr[i]);
            setAuthStatus(true);
            break;
          } else {
            console.log('not present');
          }
        }
      } catch (error) {
        //notifyError(error);
        console.log('user not found = ', error);
      }
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <LoginContext.Provider
          value={{ status: authStatus, user: checkUser, setModalOpen }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home sub={userSub} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/change_password" element={<ChangePassword />} />
            <Route
              path="/profile"
              element={<Profile userData={userData} sub={userSub} />}
            />
            <Route
              path="/create_post"
              element={<CreatePost userData={userData} />}
            />
            <Route
              path="/profile/:userid"
              element={<UserProfileDetails sub={userSub} />}
            ></Route>
          </Routes>

          <ToastContainer theme="dark" />
          {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
        </LoginContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;

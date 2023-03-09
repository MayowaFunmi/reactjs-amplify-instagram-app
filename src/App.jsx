import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './components/SignIn';
import Confirmation from './components/Confirmation';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <ToastContainer theme="dark" />
      </div>
    </BrowserRouter>
  );
};

export default App;

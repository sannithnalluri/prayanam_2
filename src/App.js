import React from 'react';
import { BrowserRouter as Router, Route, Navigate,Routes } from 'react-router-dom';
import LoginScreen from '../src/componet/Loginpage.js';
import AdminScreen from '../src/componet/Adminscreen.js';
import HomeScreen from './componet/HomeScreen.js';
import CreateScreen from './componet/Adminscreens/CreateScreen.js'
import './App.css'
import UpdateScreen from './componet/Adminscreens/UpdateScreen.js';
import DeleteScreen from './componet/Adminscreens/DeleteSreen.js';
import Userlogin from './componet/Userlogin.js';
import CreateAccountPage from './componet/CreateAccount.js';
import UserDetailPage from './componet/UserDeatilsScreen.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  const handleUserLogin=()=>{
    setIsUserLoggedIn(true)
  }

  return (
    <Router>
    <Routes>
      <Route  path="/" element={<HomeScreen/>}/>
      <Route path="/login" element={isLoggedIn ? <Navigate to="/admin" /> : <LoginScreen onLoginSuccess={handleLoginSuccess} />} />
      <Route path="/admin" element={isLoggedIn ? <AdminScreen /> : <Navigate to="/" />} />
      <Route  path="/createScreen" element={<CreateScreen/>}/>
      <Route  path="/updateScreen" element={<UpdateScreen/>}/>
      <Route  path="/DeleteScreen" element={<DeleteScreen/>}/>
      <Route  path="/UserDetails/:userEmail" element={<UserDetailPage/>}/>
      <Route path="/CreateAccount" element={isUserLoggedIn ? <Navigate to="/UserDetails" /> : <CreateAccountPage onLoginSuccess={handleUserLogin} />} />
      <Route path="/Userlogin" element={isUserLoggedIn ? <Navigate to="/UserDetails" /> : <Userlogin onLoginSuccess={handleUserLogin} />} />
      
    </Routes>
  </Router>
  );
};

export default App;

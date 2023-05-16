import React from 'react';
import { BrowserRouter as Router, Route, Navigate,Routes } from 'react-router-dom';
import LoginScreen from '../src/componet/Loginpage.js';
import AdminScreen from '../src/componet/Adminscreen.js';
import HomeScreen from './componet/HomeScreen.js';
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
    <Routes>
      <Route  path="/" element={<HomeScreen/>}/>
      <Route path="/login" element={isLoggedIn ? <Navigate to="/admin" /> : <LoginScreen onLoginSuccess={handleLoginSuccess} />} />
      <Route path="/admin" element={isLoggedIn ? <AdminScreen /> : <Navigate to="/" />} />
      
    </Routes>
  </Router>
  );
};

export default App;

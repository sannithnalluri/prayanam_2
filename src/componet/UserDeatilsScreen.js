import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './CreateAccount.css'

const UserDetailPage = ({userEmail}) => {
  const [user, setUser] = useState('');
  
  useEffect(() => {
    console.log(userEmail)
    axios.get(`http://127.0.0.1:8000/getuserdata/${userEmail}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [userEmail]);
  return (
   <div>
    <Header/>
     <div className="user-detail-container">
        <div className='comp'>
        <h1>User Details</h1>
      <div className='info'>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
        </div>
      
    </div>
    <Footer/>
   </div>
  );
};

export default UserDetailPage;

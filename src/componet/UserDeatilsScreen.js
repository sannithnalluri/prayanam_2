import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './CreateAccount.css'

const UserDetailPage = () => {
  const [user, setUser] = useState(null);
  const  userEmail  = useParams();
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/getuserdata/${userEmail}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [userEmail]);

  if (!user) {
    return <div>Loading...</div>;
  }

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

import React, { useState } from 'react';
import axios from 'axios';
import './CreateAccount.css'
import Header from './Header';
import Footer from './Footer';
import {  useNavigate} from 'react-router-dom';
const CreateAccountPage = ({onLoginSuccess,history}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [log, setlog] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const accountData = {
      name: name,
      phone: phone,
      email: email,
      password: password
    };

    axios.post('https://testing1-1-f9743958.deta.app/usersignup', accountData)
      .then(response => {
        console.log(response.data);
        navigate(`/UserDetails/${email}`);
        setlog(response.data.status)
      
        if(response.data.vaild === 1){
            onLoginSuccess()
        }
      })
      .catch(error => {
        console.log(error);
        // Handle error
      });
  };

  return (<div>
    <Header/>
    <div className="create-account-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <h2>{log}</h2>
        <button type="submit">Create Account</button>
      </form>
    </div>
    <Footer/>
  </div>
    
  );
};

export default CreateAccountPage;

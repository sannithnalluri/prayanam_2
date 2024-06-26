import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Loginpage.css';
import './HomeScreen.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Loginpage = ({userdata,login}) => {    
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [log, setlog] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
     const response = await axios.post('https://testing1-1-f9743958.deta.app/Userlogin/', {
        email,
        password,
      });
      userdata(email)
     console.log('Login successful:', response.data);      
      if(response.data.vaild === 1){
          login()
        
}
      setlog(response.data.status)
    } catch (error) {
      console.error('Error during login:', error); 
    }
    }
    return (
    <div>
      <div className="login-form">
           <Header isFirstTimeLogin={true} Useremail={email} />

            <div className='login-text'>
            <h1 >Login</h1>
            </div>
       
        <form  className='form' onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='log'>
            <h3>{log}</h3>
          </div>
          <div className='submit-btn'>
          <button type="submit">Login</button>
          </div>
          <div className='submit-btn'>
           <button type="submit"><Link to='/CreateAccount'>Create Account</Link></button>
          
          </div>
         
        </form>
        
      </div>
      <Footer/>
    </div>
        
    );
}

export default Loginpage;

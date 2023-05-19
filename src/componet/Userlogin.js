import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Loginpage.css';
import './HomeScreen.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import {  useNavigate} from 'react-router-dom';
const Loginpage = ({onLoginSuccess}) => {

    
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [log, setlog] = useState('');

  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
     const response = await axios.post('http://127.0.0.1:8000/Userlogin/', {
        email,
        password,
      });
  
      console.log('Login successful:', response.data);
      navigate(`/UserDetails/${email}`);
      
      if(response.data.vaild === 1){
        onLoginSuccess()

       
      }
      setlog(response.data.status)

      
      // Add your logic for handling the successful login response
    } catch (error) {
      console.error('Error during login:', error);
      // Add your error handling logic here
    }
   
    }
  
  

    return (
    <div>
      <div className="login-form">
             <div className='webname'>
                <div className='header'>
               <img src={require('./logo.png')} alt='logo-img'/>
                </div>
                <div className='Nav-main'>
                <ul>
                    <li style={{color:'black'}}><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Explore</Link></li>
                    <li><Link to='/'>Weather</Link></li>
                    <li><Link to='/login'>Login</Link></li>

                </ul>
                </div>
           
            </div>
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
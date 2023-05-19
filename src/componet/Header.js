import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   
    return (
        <div>
            <div className='webname'>
                <div className='header'>
               <img src={require('./logo.png')} alt='logo-img'/>
                </div>
                <div className='Nav-main'>
                <ul>
                    <li style={{color:'black'}}><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Explore</Link></li>
                    <li><Link to='/'>Weather</Link></li>
                    <li><Link to='/Userlogin'>Login</Link></li>
                    <div className='social-icon'>
                      <li><Link><img src={require('./twittericon.png')} alt='twittericon'/></Link></li>
                      <li><Link><img src={require('./instaicon.png')} alt='instaicon'/></Link></li>
                      <li><Link><img src={require('./facebookicon.png')} alt='facebook'/></Link></li>
                    </div>

                </ul>
                </div>
            </div>
    
 
        </div>
    );
}

export default Header;

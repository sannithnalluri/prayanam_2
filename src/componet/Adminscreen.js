import React from 'react';

import './Admin.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const AdminScreen = () => {
  return (
    <div>
        
        <Header/>
        
        <div className='admin-body'>
        <h1>Welcome to admin pagee</h1>
        <h3>Efficiency. Innovation. Excellence</h3>
        <p>These three pillars form the foundation of our approach to administration. We believe that by prioritizing efficiency, we can optimize processes, minimize waste, and maximize productivity. Through innovation, we constantly seek new ideas, technologies, and strategies to drive continuous improvement and stay ahead of the curve. And above all, we strive for excellence in everything we do, setting high standards and delivering exceptional results. With efficiency, innovation, and excellence at the core of our administrative practices, we are dedicated to providing streamlined operations, creative solutions, and exceptional service. Join us on this journey as we transform the way administration is done, embracing the power of efficiency, embracing the possibilities of innovation, and striving for nothing less than excellence.</p>
          <div className='admin-btn'>
          
        <div className='btn'>
          <button > <Link to='/createScreen'>Create new</Link></button>
       
        </div>
        <div className='btn'>
          <button><Link to='/updateScreen'>update info</Link></button>
        </div>
        <div className='btn'>
          <button><Link to='/delete'>
          Delete info</Link></button>
        </div> 
          </div>
            </div>
            <Footer/>
    </div>
    
  );
};

export default AdminScreen;

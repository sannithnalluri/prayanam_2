import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const AdminScreen = () => {
  const [place, setPlace] = useState('');
  const [location, setLocation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [log, setlog] = useState('');

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const placeData = {
      place: place,
      location: location,
      image: imageUrl,
      description: description
    };

    axios.post('https://testing1-1-f9743958.deta.app/postplaces', placeData)
      .then(response => {
        console.log(response.data);
        setlog(response.data.status)
      })
      .catch(error => {
        console.log(error);
        // handle error
      });
  };

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

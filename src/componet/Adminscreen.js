import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css'
import { Link } from 'react-router-dom';
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
        <form onSubmit={handleSubmit} id="addPlaceForm" className='addplace'>
        <div>
        <div className='webname'>
                <div className='header'>
               <img src={require('./logo.png')}/>
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
            <h1 style={{color:'#3355AA'}} className='adminh1'>Welcome Admin </h1>
            </div>
            <div className='container'>
            <div>
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          value={place}
          onChange={handlePlaceChange}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
          required
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={handleImageUrlChange}
          required
        />
      </div>
            </div>
     
      <div className='des'>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <div><h3>{log}</h3></div>
      <button type="submit">Submit</button>
    </form>
        
    </div>
    
  );
};

export default AdminScreen;

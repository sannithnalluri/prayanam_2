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

    axios.post('http://127.0.0.1:8000/postplaces', placeData)
      .then(response => {
        console.log(response.data);
        // handle success
        setlog(response.data.status)
      })
      .catch(error => {
        console.log(error);
        // handle error
      });
  };

  return (
    <div>
        <form onSubmit={handleSubmit} id="addPlaceForm">
        <div>
        <div className='webname'>
                <div className='header'>
                <h1>PRAYANAM </h1>
                <h3>Travel with us</h3>
                </div>
                <div className='Nav-main'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/explore'>Explore</Link></li>
                    <li><Link to='/explore'>Weather</Link></li>
                    <li><Link to='/login'>Login</Link></li>

                </ul>
                </div>
           
            </div>
            <h1>Welcome Admin </h1></div>
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
      <div>
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
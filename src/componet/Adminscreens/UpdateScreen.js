import React from 'react';
import Header from '../Header';
import { useState } from 'react';
import axios from 'axios';
import './UpdateScreen.css'
import Footer from '../Footer';
const UpdateScreen = () => {
    const [place, setPlace] = useState('');
    const [option, setOption] = useState('');
    const [newInfo, setNewInfo] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(` https://testing1-1-f9743958.deta.app/update-info/${place}?option=${option}&new_info=${newInfo}/`);
        setMessage(response.data.message);
        setPlace('');
        setOption('');
        setNewInfo('');
        console.log(response.data)

      } catch (error) {
        setMessage('Error updating information.');
        console.error(error);
      }
    };
    return (
        <div className='body'>
            <Header/>
            <div className='update-form'>       
<h1>Update Information</h1>
<form onSubmit={handleSubmit} className=''>
  <div className='input'>
    <label htmlFor="place">Place:</label>
    <input
      type="text"
      id="place"
      value={place}
      onChange={(e) => setPlace(e.target.value)}
    />
  </div>
  <div className='input'>
    <label htmlFor="option">Option:</label>
    <select id="option" value={option} onChange={(e) => setOption(e.target.value)}>
      <option value="">Select an option</option>
      <option value="location">location</option>
      <option value="image">image</option>
      <option value="description">description</option>
    </select>
  </div>
  <div className='input'>
    <label htmlFor="new-info">New Information:</label>
    <input
      type="text"
      id="new-info"
      value={newInfo}
      onChange={(e) => setNewInfo(e.target.value)}
    />
  </div>
  <div className='update-btn'> 
  <button type="submit">Update</button>
  </div>
 
</form>
{message && <p>{message}</p>}
</div>
<Footer/>
        </div>
    );
}

export default UpdateScreen;

import React from 'react';
import Header from '../Header';
import { useState } from 'react';
import axios from 'axios';
import './UpdateScreen.css'
import Footer from '../Footer';
const DeleteScreen = () => {
    const [place, setPlace] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.delete(` https://testing1-1-f9743958.deta.app/delete_file/${place}`);
        setMessage(response.data.message);
        setPlace('');
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
<h1>Delete The Information</h1>
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
  <div className='update-btn'> 
  <button type="submit">Delete</button>
  </div>
 
</form>
{message && <p>{message}</p>}
</div>
<Footer/>
        </div>
    );
}

export default DeleteScreen;

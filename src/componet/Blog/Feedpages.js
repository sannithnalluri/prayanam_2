import React from 'react';
import Header from '../Header';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './Feedpage.css'
const Feedpages = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetchImageData();
      }, []);
    
      const fetchImageData = async () => {
        try {
          const response = await axios.get('https://testing1-1-f9743958.deta.app/postedData');
          setImages(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching image data:', error);
        }
      };
    return (
        <div>
            <Header/>
            <div className='image-container2'>
              {images.map((image) => (
            <div key={image.id} className='place-card'>
              <img src={image.image_url} alt={image.place} />
              <div className='place-info'>
                <h2>{image.place}</h2>
                <p>{image.location}</p>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    );
}

export default Feedpages;

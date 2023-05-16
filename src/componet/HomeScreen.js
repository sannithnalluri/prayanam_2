import React from 'react';
import './HomeScreen.css';
import axios from 'axios';


import { useState,useEffect } from 'react';
const HomeScreen = () => {

    const [images, setImages] = useState([]);
    useEffect(() => {
        fetchImageData();
      }, []);
    
      const fetchImageData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000 ');
          setImages(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching image data:', error);
        }
      };
        
    return (
        <div >
            <div className='webname'>
                <div className='header'>
                <h1>PRAYANAM </h1>
                <h3>Travel with us</h3>
                </div>
                <div className='Nav-main'>
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>weather</li>
                    <li>Contact</li>

                </ul>
                </div>
           
            </div>
            <div className='home-header'>
                <h2>WELCOME TO THE NEW WORLD,SEE THE UNSEEN PlACES</h2>
               <div className='hidden_btn'>
               <a href='#hidden-places'><h3>See hidden places</h3></a></div> 
            </div>
         
            <main id="hidden-places">
                <h1>Places</h1>
                <hr/>
                <div className='image-container'>
              {images.map((image) => (
            <div key={image.id} className='place-card'>
              <img src={image.image} alt={image.place} />
              <div className='place-info'>
                <h2>{image.place}</h2>
                <p>{image.location}</p>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
            </main>
            <main>
                <h1>Recommanded Places</h1>
                <div className='image-container'>
              {images.map((image) => (
            <div key={image.id} className='place-card'>
              <img src={image.image} alt={image.place} />
              <div className='place-info'>
                <h2>{image.place}</h2>
                <p>{image.location}</p>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
            </main>
            
        </div>
    );
}

export default HomeScreen;

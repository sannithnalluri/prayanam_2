import React from 'react';
import './HomeScreen.css';
import axios from 'axios';



import { useState,useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
const HomeScreen = () => {

    const [images, setImages] = useState([]);
    useEffect(() => {
        fetchImageData();
      }, []);
    
      const fetchImageData = async () => {
        try {
          const response = await axios.get(' https://testing1-1-f9743958.deta.app');
          setImages(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching image data:', error);
        }
      };
        
    return (
        <div >
            <Header />
            <div className='home-header'>
                <h2 style={{color:'white'}}>WELCOME TO THE NEW WORLD,SEE THE UNSEEN PlACES</h2>
               <div className='hidden_btn'>
               <a href='#hidden-places'><h3 style={{color:'white',textDecoration:''}}>See hidden places</h3></a></div> 
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
            <Footer/>
             
        </div>
    );
}

export default HomeScreen;

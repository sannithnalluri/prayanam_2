import React, { useState, useEffect } from 'react';
import './Explore.css';
import Header from '../Header';
import Footer from '../Footer';

function ExploreApp() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(' https://testing1-1-f9743958.deta.app/videos')
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
        <Header/>
      <h1>Explore App</h1>
      <hr />
      <div className='video-container'>
        {videos.map((video) => (
          <a href={video.url} key={video.id}>
            <div className='video-card'>
              <img src={video.thumb} alt={video.title} />
              <div className='video-info'>
                <h2>{video.title}</h2>
                <p>{video.location}</p>
                <p>{video.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default ExploreApp;

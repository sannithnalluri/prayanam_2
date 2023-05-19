import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='footer-btn'>
             <hr/>
              <div className='logo-btn'>
                <img src={require('./logo_2.png')} alt='logo' />
              </div>
            <div className='footer'>
            <section id="contact-us">
      <h2>Contact Us</h2>
    </section>
    <section id="terms-conditions">
      <h3>Terms and Conditions</h3>
    </section>
    <section id="donation">
      <h3>Donation</h3>
    </section>
    <section id="suggestion">
      <h3>FAQ</h3>
    </section>
    <section id="report">
      <h3>Report</h3>
    </section>
             </div>
          
             <div className='footer'>
            <section id="contact-us">
      <h2>SOCAIL MEDIA</h2>
    </section>
    <section id="terms-conditions">
      <h3>Twittter</h3>
    </section>
    <section id="donation">
      <h3>Facebook</h3>
    </section>
    <section id="suggestion">
      <h3>Instagram</h3>
    </section>
    <section id="report">
      <h3>Email</h3>
    </section>
             </div>
             <div className='footer'>
            <section id="contact-us">
      <h2>Community</h2>
    </section>
    <section id="terms-conditions">
      <h3>About US</h3>
    </section>
    <section id="donation">
      <h3>Blog</h3>
    </section>
    <section id="suggestion">
      <h3>Join us</h3>
    </section>
    <section id="report">
      <h3>Support us</h3>
    </section>
    <section id="report">
    <h3><Link to='/login'>Login</Link></h3>
    </section>
             </div>
            </div>
          
            <footer >
  <p>&copy; 2023 Your Website. All rights reserved. | Designed by <a href="/">sannith</a></p>
</footer>
        </div>
    );
}

export default Footer;

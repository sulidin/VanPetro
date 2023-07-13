import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer'>
        <p className='footer-heading'>
           Delivering Cutting-Edge Solutions for Petrographic Excellence
        </p>
  
        <div class='footer-logo'>
              <Link to='/'>
                <img src={logo} alt="logo" />
              </Link>
          </div>
          <div class='social-media-wrap'>
          <div class='social-icons'>
         
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
  
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

            <Link
              class='social-icon-link envelope'
              to='/'
              target='_blank'
              aria-label='Email'
            >
             <i class="fa-solid fa-envelope fa-beat"></i>
            </Link>
          </div>
        </div>   
        <small class='website-rights'>Van Petro Ltd © 2023</small>
      </section>
    </div>
  );
}

export default Footer;

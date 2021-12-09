import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              CollegeCoaching <i className='fas fa-graduation-cap' />
            </Link>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}>
            <small className='website-rights'>CollegeCoaching © 2021</small>
            <Link to='/'><small className='website-rights'>Terms of Service</small></Link>
          </div>
          <div className='social-icons'>
            <Link to='/' className='social-icon-link facebook' target='_blank' aria-label='Facebook'>
              <i className='fab fa-facebook-f' />
            </Link>
            <Link to='/' className='social-icon-link instagram' target='_blank' aria-label='Instagram'>
              <i className='fab fa-instagram' />
            </Link>
            <Link to='/' className='social-icon-link youtube' target='_blank' aria-label='Youtube'>
              <i className='fab fa-youtube' />
            </Link>
            <Link to='/' className='social-icon-link twitter' target='_blank' aria-label='Twitter'>
              <i className='fab fa-twitter' />
            </Link>
            <Link to='/' className='social-icon-link linkedin' target='_blank' aria-label='LinkedIn'>
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;

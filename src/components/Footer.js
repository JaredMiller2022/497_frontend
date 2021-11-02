import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      {/*<section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Interested in joining the college coaching team?
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input className='footer-input' type='email' name="email" placeholder="Your Email" />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>*/}
      {/*<div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorship</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>YouTube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>*/}
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

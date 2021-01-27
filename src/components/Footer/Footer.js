import React from 'react'
import { Link } from 'gatsby'

import logo from '../../img/logo.svg'
import facebook from '../../img/social/facebook.svg'
import instagram from '../../img/social/instagram.svg'

import './footer.styles.scss';

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <svg viewBox="0 0 1920 343.7" className="line">
          <g id="Path_33">
            <path fill="#6EC3A6" class="st0" d="M407.4,342.3c-60,0-120-15.4-173.8-46.4L-17.5,151.7l2-3.5l251.1,144.3c108.5,62.3,242.4,61,349.6-3.5 l229.2-137.9c42-25.3,91.7-34.5,139.9-26.1c48.3,8.4,91.9,34,122.8,71.9l22.7,27.8c0.7,0.9,1.4,1.7,2.1,2.6 c22.8,26.8,54.7,44.2,89.8,49.2c35,5,70.7-2.8,100.5-21.8l327.4-208.6c96.9-61.8,221.7-61,317.8,1.9l-2.2,3.3 c-94.8-62.1-217.9-62.8-313.5-1.9l-327.4,208.6c-30.6,19.5-67.3,27.5-103.2,22.4c-36.1-5.1-68.9-23.1-92.3-50.6 c-0.7-0.9-1.5-1.8-2.2-2.6l-22.7-27.8c-30.3-37.2-73.1-62.3-120.4-70.5c-47.3-8.3-96,0.8-137.2,25.6L587.2,292.4 C532,325.7,469.7,342.3,407.4,342.3z"/>
          </g>
        </svg>
        <svg viewBox="0 0 1920 145.7">
          <path fill="#e1f3ed" class="st0" d="M0-0.2v145.7l261.1-79.7c161.6-49.3,333.5-54.1,497.6-14L869.7,79c179.4,43.9,365.4,54.3,548.6,30.6l115.8-15 c72.7-9.4,146.5-5.6,217.8,11.2l168.1,39.6V-0.2H0z"/>
        </svg>
        {/* Instagram Feed */}
        <div className="instagram-feed">
          <h2 class="blue-green-text">Follow us on Instagram</h2>
          <p class="white-text" style={{ 'text-align': 'center' }}>Instagram feed to be added</p>
        </div>
        {/* Footer Navigation */}
        <div class="footer-nav">
          <div class="col">
            <Link to="/">
              Home
            </Link>
            <Link to="/about">
              About
            </Link>
            <Link to="/services">
              Services
            </Link>
            <Link to="/portfolio">
              Portfolio
            </Link>
            <Link to="/testimonials">
              Testimonials
            </Link>
            <Link to="/contact">
              Contact
            </Link>
          </div>
          <div class="col">
            <Link to="/privacy-policy">
              Privacy
            </Link>
            <Link to="/cookie-policy">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

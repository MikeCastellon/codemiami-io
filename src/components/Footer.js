import React, { Component } from 'react';
import codemiamilogo from '../images/Logos/codemiamilogo.png'

const Footer = () => {
    return(
        <div className='footer sticky-footer'>
        <footer className="footer dark-bg-1">
  {/* flex-container start */}
  <div className="flex-container container top-bottom-padding-90">
    {/* column start */}
    <div className="two-columns bottom-padding-60">
      <div className="content-right-margin-10 footer-center-mobile">
        <img
          className="footer-logo"
          src={codemiamilogo}
          alt="logo"
        />
      </div>
    </div>
    {/* column end */}
    {/* column start */}
    <div className="three-columns bottom-padding-60">
      <div className="content-left-right-margin-10">
        <ul className="footer-menu text-color-4">
          <li>
            <a
              className="pointer-large small-title-oswald hover-color active"
              href="index.html"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="pointer-large small-title-oswald hover-color"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="pointer-large  small-title-oswald hover-color"
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="pointer-large small-title-oswald hover-color"
              href="#partners"
            >
              Partners
            </a>
          </li>
          <li>
            <a
              className="pointer-large small-title-oswald hover-color"
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className="pointer-large small-title-oswald hover-color"
              href="#staff"
            >
              Staff
            </a>
          </li>
          <li>
            <a
              className="pointer-large small-title-oswald hover-color"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* column end */}
    {/* column start */}
    <div className="four-columns bottom-padding-60">
      <div className="content-left-right-margin-10 footer-center-mobile">
        <ul className="footer-information text-color-4">
          <li>
            <i className="far fa-envelope" />
            <a href="mailto:codemiami.io@gmail.com" className="xsmall-title-oswald">
              codemiami.io@gmail.com
            </a>
          </li>
          <li>
            <i className="fas fa-mobile-alt" />
            <a href="#" className="xsmall-title-oswald">
            ‪(305) 501-0964‬
            </a>
          </li>
          <li>
            <i className="fab fa-instagram" />
            <a href="#" className="xsmall-title-oswald">
              @CodeMiami.io
            </a>
          </li>
       
        </ul>
      </div>
    </div>
    {/* column end */}
    
    {/* column start */}
    <div className="twelve-columns">
      <p className="p-letter-style text-color-4 footer-copyright">
        © Copyright 2020 CodeMiami.io 
      </p>
    </div>
    {/* column end */}
  </div>
  {/* flex-container end */}
</footer>
</div>

    )
}

export default Footer;
import React, { Component } from 'react';

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
          src="assets/images/logo/logo-white.png"
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
              className="pointer-large animsition-link small-title-oswald hover-color active"
              href="index.html"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="pointer-large animsition-link small-title-oswald hover-color"
              href="about.html"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="pointer-large animsition-link small-title-oswald hover-color"
              href="services.html"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="pointer-large animsition-link small-title-oswald hover-color"
              href="portfolio.html"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="pointer-large animsition-link small-title-oswald hover-color"
              href="blog.html"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="pointer-large animsition-link small-title-oswald hover-color"
              href="contact.html"
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
            <a href="#" className="xsmall-title-oswald">
              email@xen_agency.com
            </a>
          </li>
          <li>
            <i className="fas fa-mobile-alt" />
            <a href="#" className="xsmall-title-oswald">
              +23 8 8532 7834
            </a>
          </li>
          <li>
            <i className="fas fa-map-marker-alt" />
            <a href="#" className="xsmall-title-oswald text-height-17">
              PO Box 223158 Oliver Street
              <br />
              <span>East Victoria 2006 UK</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* column end */}
    {/* column start */}
    <div className="three-columns bottom-padding-60">
      <div className="content-left-margin-10">
        <ul className="footer-social">
          <li>
            <div className="flip-btn-box">
              <a
                href="#"
                className="flip-btn pointer-small"
                data-text="Instagram"
              >
                Instagram
              </a>
            </div>
          </li>
          <li>
            <div className="flip-btn-box">
              <a
                href="#"
                className="flip-btn pointer-small"
                data-text="Facebook"
              >
                Facebook
              </a>
            </div>
          </li>
          <li>
            <div className="flip-btn-box">
              <a
                href="#"
                className="flip-btn pointer-small"
                data-text="Spotify"
              >
                Spotify
              </a>
            </div>
          </li>
          <li>
            <div className="flip-btn-box">
              <a href="#" className="flip-btn pointer-small" data-text="Vimeo">
                Vimeo
              </a>
            </div>
          </li>
          <li>
            <div className="flip-btn-box">
              <a
                href="#"
                className="flip-btn pointer-small"
                data-text="Behance"
              >
                Behance
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    {/* column end */}
    {/* column start */}
    <div className="twelve-columns">
      <p className="p-letter-style text-color-4 footer-copyright">
        © Copyright 2019 XEN. Theme by <a href="#">Jinna Gik</a>
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
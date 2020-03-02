import React, { Component } from 'react';
import mikespic from '../images/mikespic.JPG';
import simonspic from '../images/simonspic.JPG';


const Staff = () => {
    return(
        <section
            id="staff"
            className="latest-news top-padding-120 bottom-padding-30 light-bg-1"
            data-midnight="black"
          >
            {/* container start */}
            <div className="container">
              {/* text-center start */}
              <div data-animation-container className="text-center">
                <h2
                  data-animation-child
                  className="large-title text-height-10 text-color-1 overlay-anim-box2"
                  data-animation="overlay-anim2"
                >
                  Meet the crew
                </h2>
                <br />
                <p
                  data-animation-child
                  className="fade-anim-box tr-delay02 text-color-1 xsmall-title-oswald top-margin-5"
                  data-animation="fade-anim"
                >
                  Let's Get Personal
                </p>
              </div>
              {/* text-center end */}
              {/* flex-container start */}
              <div className="flex-container response-999 top-padding-60">
                {/* column start */}
                <div className="four-columns bottom-padding-90">
                  <article
                    className="content-right-margin-20 light-bg-2"
                    data-animation-container
                  >
              
                      <div
                        className="overlay-anim-box2 overlay-dark-bg-2"
                        data-animation="overlay-anim2"
                      >
                        <img
                          className="hover-img"
                          src={simonspic}
                          alt="blog img"
                        />
                      </div>
                      <h3 className="title-style text-align text-color-1 top-margin-30 blog-title content-padding-l-r-20">
                        <span
                          data-animation-child
                          className="overlay-anim-box2 hover-content overlay-dark-bg-2 tr-delay01"
                          data-animation="overlay-anim2"
                        >
                          Simon Choren
                        </span>
                        
                      </h3>
                    
                    <div className="content-padding-bottom-20 content-padding-l-r-20">
                      <ul
                        data-animation-child
                        className="blog-category top-margin-30 fade-anim-box tr-delay04 text-color-2"
                        data-animation="fade-anim"
                      >
                        <li>
                          <i className="fab fa-instagram text-color-3" />
                        </li>
                        <li className="p-letter-style pointer-small hover-color">
                          <a href="https://www.instagram.com/dadecapo/">@DadeCapo</a>
                        </li>
                    
                      </ul>
                      <ul
                        data-animation-child
                        className="blog-tags top-margin-10 fade-anim-box tr-delay05 text-color-2"
                        data-animation="fade-anim"
                      >
                        <li>
                          <i className="fab fa-linkedin text-color-3" />
                        </li>
                        <li className="p-letter-style pointer-small hover-color">
                          <a href="https://www.linkedin.com/in/simonchoren/">Simon Choren</a>
                        </li>

                        
                      
                      </ul>
                      
                   
                    </div>
                  </article>
                </div>
                {/* column end */}
                {/* column start */}
                <div className="four-columns bottom-padding-90">
                  <article
                    className="content-left-right-margin-10 light-bg-2"
                    data-animation-container
                  >
                 
                      <div
                        className="overlay-anim-box2 overlay-dark-bg-2"
                        data-animation="overlay-anim2"
                      >
                        <img
                          className="hover-img"
                          src={mikespic}
                          alt="blog img"
                        />
                      </div>
                      <h3 className="title-style text-align text-color-1 top-margin-30 blog-title content-padding-l-r-20">
                        <span
                          data-animation-child
                          className="overlay-anim-box2 hover-content overlay-dark-bg-2 tr-delay01"
                          data-animation="overlay-anim2"
                        >
                          Mike Castellon
                        </span>
                       
                      </h3>
                    
                    <div className="content-padding-bottom-20 content-padding-l-r-20">
                      <ul
                        data-animation-child
                        className="blog-category top-margin-30 fade-anim-box tr-delay04 text-color-2"
                        data-animation="fade-anim"
                      >
                        <li>
                          <i className="fab fa-instagram text-color-3" />
                        </li>
                        <li className="p-letter-style pointer-small hover-color">
                          <a href="https://www.instagram.com/_dont_hate_appreciate/">@_dont_hate_appreciate</a>
                        </li>
                     
                      </ul>
                      <ul
                        data-animation-child
                        className="blog-tags top-margin-10 fade-anim-box tr-delay05 text-color-2"
                        data-animation="fade-anim"
                      >
                        <li>
                          <i className="fab fa-linkedin text-color-3" />
                        </li>
                        <li className="p-letter-style pointer-small hover-color">
                          <a href="https://www.linkedin.com/in/michael-castellon/">Mike Castellon</a>
                        </li>
                       
                      </ul>
                    
                    </div>
                  </article>
                </div>
                {/* column end */}
                
              </div>
              {/* flex-container end */}
            </div>
            {/* container end */}
          </section>
          
    )
}

export default Staff;

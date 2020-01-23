import React, { Component } from 'react';

const RecentWorks = () => {
    return(
      
          <section
            className="light-bg-1 bottom-padding-30 top-padding-120"
            data-midnight="black"
          >
            {/* container start */}
            <div
              data-animation-container
              className="container small bottom-padding-60 text-center"
            >
              <h2
                data-animation-child
                className="large-title text-height-10 text-color-1 overlay-anim-box2"
                data-animation="overlay-anim2"
              >
                Latest Creations
              </h2>
              <br />
              <p
                data-animation-child
                className="fade-anim-box tr-delay02 text-color-1 xsmall-title-oswald top-margin-5"
                data-animation="fade-anim"
              >
                Digital Solutions
              </p>
            </div>
            {/* container end */}
            {/* bottom-padding-90 start */}
            <div className="bottom-padding-90">
              {/* portfolio-content start */}
              <div className="portfolio-content flex-min-height-box">
                {/* portfolio-content-inner start */}
                <div className="portfolio-content-inner flex-min-height-inner">
                  {/* flex-container start */}
                  <div className="flex-container container small">
                    {/* column start */}
                    <div data-animation-container className="six-columns">
                      <div className="content-right-margin-40">
                        <span
                          className="small-title-oswald red-color overlay-anim-box2"
                          data-animation="overlay-anim2"
                        >
                          Web redesign
                        </span>
                        <h3 className="title-style text-color-1">
                          <span
                            data-animation-child
                            className="overlay-anim-box2 overlay-dark-bg-2 tr-delay01"
                            data-animation="overlay-anim2"
                          >
                            Statewide Electrical 
                          </span>
                          <br />
                          <span
                            data-animation-child
                            className="overlay-anim-box2 overlay-dark-bg-2 tr-delay02"
                            data-animation="overlay-anim2"
                          >
                            Contractors Inc
                          </span>
                          <br />
                   
                        </h3>
                        <p
                          data-animation-child
                          className="p-style-small text-color-2 fade-anim-box tr-delay04"
                          data-animation="fade-anim"
                        >
                          Statewide Electrical Contractors has been serving the nation with their services since 1996. We <strong>re-designed</strong> their page with the goal of generating more <strong>traffic </strong>and clients. We highlighted the projects and made navigation <strong>user friendly</strong>. We dove deep into the <strong>SEO </strong> and content of the site in order to increase their <strong>natural search results</strong> and were able to successfuly help them <strong>maximize</strong> their digital space. As an add-on we provided them with all <strong>original images</strong> for the site by sending our media team to their worksites. 
                        </p>
                        <div
                          data-animation-child
                          className="arrow-btn-box top-margin-30 fade-anim-box tr-delay05"
                          data-animation="fade-anim"
                        >
                          <a
                            href="https://swecinc.com/"
                            className="arrow-btn pointer-large animsition-link"
                          >
                            Check it out
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* column end */}
                    {/* column start */}
                    <div className="six-columns top-padding-60">
                      <a
                        href="project.html"
                        className="portfolio-content-bg-box pointer-large hover-box hidden-box animsition-link"
                      >
                        <div
                          className="portfolio-content-bg hover-img overlay-anim-box2 overlay-dark-bg-2"
                          data-animation="overlay-anim2"
                          style={{
                            backgroundImage:
                              "url(assets/images/projects/pexels-photo-1619654.jpeg)"
                          }}
                        />
                      </a>
                    </div>
                    {/* column end */}
                  </div>
                  {/* flex-container end */}
                </div>
                {/* portfolio-content-inner end */}
              </div>
              {/* portfolio-content end */}
            </div>
            {/* bottom-padding-90 end */}
            {/* bottom-padding-90 start */}
            <div className="bottom-padding-90">
              {/* portfolio-content start */}
              <div className="portfolio-content flex-min-height-box">
                {/* portfolio-content-inner start */}
                <div className="portfolio-content-inner flex-min-height-inner">
                  {/* flex-container start */}
                  <div className="flex-container reverse container small">
                    {/* column start */}
                    <div className="six-columns top-padding-60">
                      <a
                        href="project.html"
                        className="portfolio-content-bg-box pointer-large hover-box hidden-box animsition-link"
                      >
                        <div
                          className="portfolio-content-bg hover-img overlay-anim-box2 overlay-dark-bg-2"
                          data-animation="overlay-anim2"
                          style={{
                            backgroundImage:
                              "url(assets/images/projects/audio-cassette-cassette-tape-1626481.jpg)"
                          }}
                        />
                      </a>
                    </div>
                    {/* column end */}
                    {/* column start */}
                    <div data-animation-container className="six-columns">
                      <div className="content-left-margin-40">
                        <span
                          className="small-title-oswald red-color overlay-anim-box2"
                          data-animation="overlay-anim2"
                        >
                          Full-service Web development
                        </span>
                        <h3 className="title-style text-color-1">
                          <span
                            data-animation-child
                            className="overlay-anim-box2 overlay-dark-bg-2 tr-delay01"
                            data-animation="overlay-anim2"
                          >
                            Beautify
                          </span>
                          
                        </h3>
                        <p
                          data-animation-child
                          className="p-style-small text-color-2 fade-anim-box tr-delay04"
                          data-animation="fade-anim"
                        >
                          Beautify is a Full Stack web application that connects users with artists by allowing the user to post a listing for a space that needs original art work to be done. The artist then has an oppurtunity to make a bid on the project and allow the user either accept or deny the bid. Finally the user has the ability to make a payment to the artist. Beautiy was created using React.js for the front end, Ruby on Rails backend, and Stripe Api for payments.
                        </p>
                        <div
                          data-animation-child
                          className="arrow-btn-box top-margin-30 fade-anim-box tr-delay05"
                          data-animation="fade-anim"
                        >
                          <a
                            href="https://beautifyapp.herokuapp.com/users/sign_in"
                            className="arrow-btn pointer-large animsition-link"
                          >
                            Check it out
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* column end */}
                  </div>
                  {/* flex-container end */}
                </div>
                {/* portfolio-content-inner end */}
              </div>
              {/* portfolio-content end */}
            </div>
            {/* bottom-padding-90 end */}
            {/* bottom-padding-90 start */}
            <div className="bottom-padding-90">
              {/* portfolio-content start */}
              <div className="portfolio-content flex-min-height-box">
                {/* portfolio-content-inner start */}
                <div className="portfolio-content-inner flex-min-height-inner">
                  {/* flex-container start */}
                  <div className="flex-container container small">
                    {/* column start */}
                    <div data-animation-container className="six-columns">
                      <div className="content-right-margin-40">
                        <span
                          className="small-title-oswald red-color overlay-anim-box2"
                          data-animation="overlay-anim2"
                        >
                          Full STack Web App
                        </span>
                        <h3 className="title-style text-color-1">
                          <span
                            data-animation-child
                            className="overlay-anim-box2 overlay-dark-bg-2 tr-delay01"
                            data-animation="overlay-anim2"
                          >
                            Enhanced publication System
                          </span>
                          
                        </h3>
                        <p
                          data-animation-child
                          className="p-style-small text-color-2 fade-anim-box tr-delay04"
                          data-animation="fade-anim"
                        >
                        EPS is a complete <strong>Full Stack web application</strong> developed to help the <strong>United States Airforce</strong> with their process in editing and modifying documentations. Our client is an <strong>Veteran</strong> that came to us with a idea and we were able to turn his <strong>vision into reality</strong>. The front-end was built on <strong>React.js</strong> and the back-end was coded using <strong>Ruby on Rails</strong>.
                        </p>
                        <div
                          data-animation-child
                          className="arrow-btn-box top-margin-30 fade-anim-box tr-delay05"
                          data-animation="fade-anim"
                        >
                          <a
                            href="https://eps-front.herokuapp.com/dashboard/user/1"
                            className="arrow-btn pointer-large animsition-link"
                          >
                           Check it out
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* column end */}
                    {/* column start */}
                    <div className="six-columns top-padding-60">
                      <a
                        href="project.html"
                        className="portfolio-content-bg-box pointer-large hover-box hidden-box animsition-link"
                      >
                        <div
                          className="portfolio-content-bg hover-img overlay-anim-box2 overlay-dark-bg-2"
                          data-animation="overlay-anim2"
                          style={{
                            backgroundImage:
                              "url(assets/images/projects/blur-close-up-equipment-1034651.jpg)"
                          }}
                        />
                      </a>
                    </div>
                    {/* column end */}
                  </div>
                  {/* flex-container end */}
                </div>
                {/* portfolio-content-inner end */}
              </div>
              {/* portfolio-content end */}
            </div>
            {/* bottom-padding-90 end */}
            {/* bottom-padding-90 start */}
            <div className="bottom-padding-90">
              {/* portfolio-content start */}
              <div className="portfolio-content flex-min-height-box">
                {/* portfolio-content-inner start */}
                <div className="portfolio-content-inner flex-min-height-inner">
                  {/* flex-container start */}
                  <div className="flex-container reverse container small">
                    {/* column start */}
                    <div className="six-columns top-padding-60">
                      <a
                        href="project.html"
                        className="portfolio-content-bg-box pointer-large hover-box hidden-box animsition-link"
                      >
                        <div
                          className="portfolio-content-bg hover-img overlay-anim-box2 overlay-dark-bg-2"
                          data-animation="overlay-anim2"
                          style={{
                            backgroundImage:
                              "url(assets/images/projects/chocolate-delicious-dessert-890500.jpg)"
                          }}
                        />
                      </a>
                    </div>
                    {/* column end */}
                    {/* column start */}
                    <div data-animation-container className="six-columns">
                      <div className="content-left-margin-40">
                        <span
                          className="small-title-oswald red-color overlay-anim-box2"
                          data-animation="overlay-anim2"
                        >
                         api integration
                        </span>
                        <h3 className="title-style text-color-1">
                          <span
                            data-animation-child
                            className="overlay-anim-box2 overlay-dark-bg-2 tr-delay01"
                            data-animation="overlay-anim2"
                          >
                            BrewFinder
                          </span>
                          
                        </h3>
                        <p
                          data-animation-child
                          className="p-style-small text-color-2 fade-anim-box tr-delay04"
                          data-animation="fade-anim"
                        >
                          Tote bag cornhole pork belly swag, cronut hoodie snackwave 90's
                          messenger bag pour-over disrupt chartreuse. Vape ugh cardigan
                          hell of. Vaporware umami master cleanse neutra, chartreuse
                          flexitarian lo-fi selvage hella hoodie freegan gentrify. 8-bit
                          air plant umami asymmetrical franzen semiotics before.
                        </p>
                        <div
                          data-animation-child
                          className="arrow-btn-box top-margin-30 fade-anim-box tr-delay05"
                          data-animation="fade-anim"
                        >
                          <a
                            href="https://brewfinder.netlify.com/"
                            className="arrow-btn pointer-large animsition-link"
                          >
                            Check it out
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* column end */}
                  </div>
                  {/* flex-container end */}
                </div>
                {/* portfolio-content-inner end */}
              </div>
              {/* portfolio-content end */}
            </div>
            {/* bottom-padding-90 end */}
          </section>
          
          
    )
        }


export default RecentWorks;
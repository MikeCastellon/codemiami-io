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
                Be Bold Stand Out
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
                          Beautify is a <strong>Full Stack</strong> web application that was developed to help new businesses add an artistic touch to there identity by allowing the user to post a listing for a space that needs original art work to be done. The artist then has an oppurtunity to make a bid on the project and allow the user either accept or deny the bid. Beautiy was developed using <strong>React.js</strong> for the front end, <strong>Ruby on Rails</strong> backend, and <strong>Stripe Api</strong> for payments.
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
                          Mlkshk YOLO wolf, leggings vinyl crucifix stumptown tousled.
                          Pabst venmo gentrify deep v microdosing migas occupy master
                          cleanse intelligentsia sartorial chia activated charcoal.
                          Iceland small batch live-edge raclette roof party dreamcatcher
                          austin pickled. Chillwave cronut messenger bag truffaut.
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
                         Brewfinder is a web application that utilizes third-party <strong>api-integeration</strong> that allows the user to search for breweries all over the united states. <strong>Api-integeration</strong> is important because it allows you to use other buisnesses technology and information to combime them with your own web application. Brewfinder was developed using<strong> HTML</strong> , <strong>CSS</strong>, and <strong>React.js</strong>.
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
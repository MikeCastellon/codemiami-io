import React, { Component } from 'react';

const About = () => {
    return(

        <section id="down" className="dark-bg-1 flex-min-height-box">
        {/* flex-min-height-inner start */}
        <div className="flex-min-height-inner">
          {/* container start */}
          <div className="container small top-bottom-padding-120">
            {/* flex-container start */}
            <div data-animation-container className="flex-container">
              {/* column start */}
              <div className="twelve-columns text-center">
                <h2 className="large-title text-height-12">
                  <span
                    data-animation-child
                    className="title-fill"
                    data-animation="title-fill-anim"
                    data-text="Who is code miami?"
                  >
                    Who is Code Miami?
                  </span>
                  <br />
                 
                </h2>
              </div>
              {/* column end */}
              {/* column start */}
              <div className="six-columns">
                <div className="content-right-margin-20">
                  <p
                    data-animation-child
                    className="p-style-medium text-color-5 fade-anim-box tr-delay02"
                    data-animation="fade-anim"
                  >
                  We at Code Miami are the bridge that helps you turn your idea into reality. Our team is made up of developers from Miami that not only have a passion for helping the community but a hunger for success. Our goal is to help you take your business to the next level and maximize  your digital space. Miami is filled with talented individuals with priceless ideas that just need the right tools to make an impact in society and really showcase their unique and creative abilities.
                  </p>
                </div>
              </div>
              {/* column end */}
              {/* column start */}
              <div className="six-columns">
                <div className="content-left-margin-20">
                  <p
                    data-animation-child
                    className="p-style-medium text-color-5 fade-anim-box tr-delay03"
                    data-animation="fade-anim"
                  >
                  We have been able to help startups break out of that beginner stage and become a profitable business. We also help existing businesses that just need that extra push in order to maximize their digital presence and not just create more business but generate leads that convert. We know how competitive it can be to start your own business and our goal is to help you grow. If you grow we grow. We are molding the Miami Tech scene one idea at a time!
                  </p>
                </div>
              </div>
              {/* column end */}
              {/* column start */}
              <div className="twelve-columns text-center">
                <p
                  data-animation-child
                  className="p-letter-style text-color-4 text-height-13 fade-anim-box tr-delay04"
                  data-animation="fade-anim"
                >
                "For the strength of the pack is the wolf and the strength of the wolf is the pack" 
                     
                </p>
              </div>
              {/* column end */}
            </div>
            {/* flex-container end */}
          </div>
          {/* container end */}
        </div>
        {/* flex-min-height-inner end */}
      </section>
    
      
    )
}


export default About;


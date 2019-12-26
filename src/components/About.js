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
                    data-text="We are Creative"
                  >
                    We are Creative
                  </span>
                  <br />
                  <span
                    data-animation-child
                    className="title-fill tr-delay01"
                    data-animation="title-fill-anim"
                    data-text="We are Xen"
                  >
                    We are Xen
                  </span>
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
                    Affogato thundercats quinoa, portland cold-pressed edison bulb
                    artisan paleo banjo tousled try-hard food truck pop-up bushwick
                    godard. Occupy 90's try-hard tote bag chicharrones stumptown
                    polaroid hashtag cliche +1, tousled fanny pack. Tote bag iPhone
                    crucifix hella helvetica food truck bicycle rights cloud bread. Yr
                    iPhone asymmetrical, next level vexillologist godard blog green
                    juice chia. Tacos jean shorts pickled PBR&amp;B poutine.
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
                    Godard slow-carb chartreuse occupy, tumblr letterpress pok pok
                    tattooed yr lyft yuccie kinfolk. IPhone kombucha shaman gastropub
                    snackwave 90's lo-fi pug chillwave pok pok tofu. Swag deep v
                    listicle roof party seitan man braid raclette church-key trust
                    fund locavore vexillologist green juice raw denim tilde meh.
                    Austin thundercats locavore taiyaki snackwave hoodie put a bird on
                    it tattooed selvage kitsch ramps.
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
                  Godard slow-carb chartreuse occupy, tumblr letterpress
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


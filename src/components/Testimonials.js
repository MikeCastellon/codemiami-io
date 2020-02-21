import React  from 'react';
import fred from '../images/fredkinney.jpg';
import steve from '../images/stevespella.jpg';
import josh from '../images/joshfernandez.jpg';

const Testimonials = () => {
    return(
        <div id="testimonials" className="light-bg-2  top-bottom-padding-120" data-midnight="black">
  {/* testimonials-slider start */}
  <div className="testimonials-slider container small">
    {/* swiper-wrapper start */}
    <div className="swiper-wrapper">
      {/* slide start */}
      <div className="swiper-slide text-center">
        <img
          src={josh}
        />
        <div className="testimonials-content">
          <p className="text-color-4 p-style-bold">
          My experience with Mike and Simon was awesome to say the least. I have been working with my family business and they are old school. We hadn’t updated the company website in over 10 years and once we got worked with code miami, we instantly saw positive feedback. They were easy to work with and I never thought it would be that easy to get a whole custom made site for us. I highly recommend them to anyone trying to get their business to the next level.
          </p>
        </div>
        <div className="text-color-1 small-title-oswald">
          Joshua Fernandez, <span className="text-color-2">SWEC INC</span>
        </div>
      </div>
      {/* slide end */}
      {/* slide start */}
      <div className="swiper-slide text-center">
        <img
          src={fred}
          alt="author"
        />
        <div className="testimonials-content">
          <p className="text-color-4 p-style-bold">
          I really needed something that I could launch online that would service people right away. I didn’t have a clear idea what I wanted but I def wanted a search engine to find local bars. The guys over at Code Miami really put in the work and helped me with the name, colors and thinking through what I wanted the website to do. I appreciate all their hard work and I couldn’t be happier with the results.
          </p>
        </div>
        <div className="text-color-1 small-title-oswald">
          Fred Kinney, <span className="text-color-2">BREWFINDER</span>
        </div>
      </div>
      {/* slide end */}
      {/* slide start */}
      <div className="swiper-slide text-center">
        <img
          src={steve}
          alt="author"
        />
        <div className="testimonials-content">
          <p className="text-color-4 p-style-bold">
          I couldn’t believe the business idea and development that these guys did. It was so awesome to see these two kids from Miami create a business that would help mold the art scene here in wynwood. Beautify is a unique way for artist and building owners to really bring out the creativity and talent that so many have and I just love the idea and I can wait to see what else they come up with. Look out for these guys!
          </p>
        </div>
        <div className="text-color-1 small-title-oswald">
          Steve Spella, <span className="text-color-2">BEAUTIFY</span>
        </div>
      </div>
      {/* slide end */}
    </div>
    {/* swiper-wrapper end */}
    {/* swiper-pagination */}
    <div className="swiper-pagination" />
  </div>
  {/* testimonials-slider end */}
</div>

    )
}

export default Testimonials;
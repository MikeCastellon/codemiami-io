import React, { Component } from 'react';



const Header = () => {
    return(
        <div>
  {/* loading start */}
  <div className="loading">
    <img
      className="logo-loading"
      src="assets/images/logo/logo-loader.png"
      alt="logo"
    />
  </div>
  {/* loading end */}
  {/* pointer start */}
  <div className="pointer" id="pointer">
    <i className="fas fa-long-arrow-alt-right" />
    <i className="fas fa-search" />
    <i className="fas fa-link" />
  </div>
  {/* pointer end */}
  {/* to-top-btn start */}
  <a className="to-top-btn pointer-small" href="#up">
    <span className="to-top-arrow" />
  </a>
  {/* to-top-btn end */}
  {/* header start */}
  <header className="fixed-header">
    {/* header-flex-box start */}
    <div className="header-flex-box">
      {/* logo start */}
      <a href="index.html" className="logo pointer-large animsition-link">
        <div className="logo-img-box">
          <img
            className="logo-white"
            src="assets/images/logo/logo-white.png"
            alt="logo"
          />
          <img
            className="logo-black"
            src="assets/images/logo/logo-black.png"
            alt="logo"
          />
        </div>
      </a>
      {/* logo end */}
      {/* menu-open start */}
      <div className="menu-open pointer-large">
        <span className="hamburger" />
      </div>
      {/* menu-open end */}
    </div>
    {/* header-flex-box end */}
  </header>
  {/* header end */}
  {/* nav-container start */}
  <nav className="nav-container dark-bg-1">
    {/* nav-logo start */}
    <div className="nav-logo">
      <img src="assets/images/logo/logo-white.png" alt="logo" />
    </div>
    {/* nav-logo end */}
    {/* menu-close */}
    <div className="menu-close pointer-large" />
    {/* dropdown-close-box start */}
    <div className="dropdown-close-box">
      <div className="dropdown-close pointer-large">
        <span />
      </div>
    </div>
    {/* dropdown-close-box end */}
    {/* nav-menu start */}
    <ul className="nav-menu dark-bg-1">
      {/* nav-box start */}
      <li className="nav-box nav-bg-change active dropdown-open">
        <a className="pointer-large nav-link">
          <span className="nav-btn active" data-text="Home">
            Home
          </span>
        </a>
       
        <div
          className="nav-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/pexels-photo-1806031.jpeg)"
          }}
        />
      </li>
      {/* nav-box end */}
      {/* nav-box start */}
      <li className="nav-box nav-bg-change">
        <a href="#about" className="animsition-link pointer-large nav-link">
          <span className="nav-btn" data-text="About">
            About
          </span>
        </a>
        <div
          className="nav-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/adolescent-adult-diversity-1034361.jpg)"
          }}
        />
      </li>
      {/* nav-box end */}
      {/* nav-box start */}
      <li className="nav-box nav-bg-change">
        <a
          href="services.html"
          className="animsition-link pointer-large nav-link"
        >
          <span className="nav-btn" data-text="Portfolio">
            Portfolio
          </span>
        </a>
        <div
          className="nav-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/bald-casual-facial-hair-1708528.jpg)"
          }}
        />
      </li>
      {/* nav-box end */}
      {/* nav-box start */}
      <li className="nav-box nav-bg-change">
        <a className="pointer-large nav-link">
          <span className="nav-btn" data-text="Partners">
            Partners
          </span>
        </a>
       
        <div
          className="nav-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/art-artistic-artsy-1988681.jpg)"
          }}
        />
      </li>
      {/* nav-box end */}
      {/* nav-box start */}
      <li className="nav-box nav-bg-change ">
        <a className="pointer-large nav-link">
          <span className="nav-btn" data-text="Testimonials">
            Testimonials
          </span>
        </a>
        
        <div
          className="nav-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/beautiful-black-close-up-1689731.jpg)"
          }}
        />
      </li>
      {/* nav-box end */}
      {/* nav-box start */}
      <li className="nav-box nav-bg-change">
        <a
          href="contact.html"
          className="animsition-link pointer-large nav-link"
        >
          <span className="nav-btn" data-text="Staff">
            Staff
          </span>
        </a>
        <div
          className="nav-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/double-exposure-2390185_1920.jpg)"
          }}
        />
      </li>
      {/* nav-box end */}
        {/* nav-box start */}
        <li className="nav-box nav-bg-change">
        <a
          href="#contact"
          className="animsition-link pointer-large nav-link"
        >
          <span className="nav-btn" data-text="Contact">
            Contact
          </span>
        </a>
        <div
          className="nav-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/double-exposure-2390185_1920.jpg)"
          }}
        />
      </li>
      {/* nav-box end */}
    </ul>
    {/* nav-menu end */}
  </nav>
  {/* nav-container end */}
  {/* animsition-overlay start */}
  <main className="animsition-overlay" data-animsition-overlay="true">
    {/* home-slider start */}
    <section className="home-slider" id="up">
      {/* swiper-wrapper start */}
      <div className="swiper-wrapper">
        {/* swiper-slide start */}
        <div className="swiper-slide flex-min-height-box home-slide">
          {/* slide-bg */}
          <div
            className="slide-bg overlay-loading2 overlay-dark-bg-1 header1"
           
          />
          {/* home-slider-content start */}
          <div className="home-slider-content flex-min-height-inner dark-bg-1">
            {/* flex-container start */}
            <div className="container top-bottom-padding-120 flex-container response-999">
              {/* column start */}
              <div className="six-columns six-offset">
                <div className="content-left-margin-40">
                  <h2 className="large-title-bold">
                    <span
                      className="slider-title-fill slider-tr-delay01"
                      data-text="Code Miami"
                    >
                      Code Miami
                    </span>
                    <br />
                    <span
                      className="slider-title-fill slider-tr-delay02"
                      data-text="create & "
                    >
                      create &amp; 
                    </span>
                    <br />
                    <span
                      className="slider-title-fill slider-tr-delay03"
                      data-text="Motivate"
                    >
                      Motivate
                    </span>
                  </h2>
                  <p className="p-style-bold-up text-height-20 d-flex-wrap">
                    <span
                      className="slider-title-fill slider-tr-delay04"
                      data-text="Stop thinking"
                    >
                      Stop Thinking
                    </span>
                    <span
                      className="slider-title-fill slider-tr-delay05"
                      data-text="& Start Building"
                    >
                      & Start Building
                    </span>
                   
                  </p>
                  <div className="slider-fade slider-tr-delay07 top-margin-30">
                    <div className="border-btn-box border-btn-red pointer-large">
                      <div className="border-btn-inner">
                        <a
                          href="#aboutus"
                          className="border-btn"
                          data-text="Who are we?"
                        >
                         Who are we?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* column end */}
            </div>
            {/* flex-container end */}
          </div>
          {/* home-slider-content end */}
        </div>
        {/* swiper-slide end */}
        {/* swiper-slide start */}
        <div className="swiper-slide flex-min-height-box home-slide ">
          {/* slide-bg */}
          <div
            className="slide-bg header2"
         
          />
          {/* home-slider-content start */}
          <div className="home-slider-content flex-min-height-inner dark-bg-2">
            {/* flex-container start */}
            <div className="container top-bottom-padding-120 flex-container response-999">
              {/* column start */}
              <div className="six-columns six-offset">
                <div className="content-left-margin-40">
                  <h2 className="slider-overlay2 medium-title red-color">
                    Evolve
                  </h2>
                  <h3 className="large-title-bold text-color-4">
                    <span className="slider-overlay2 slider-tr-delay01">
                      Everything begins
                    </span>
                    <br />
                    <span className="slider-overlay2 slider-tr-delay02">
                      with an idea
                    </span>
                    <br />
                  
                  </h3>
                  <div className="slider-fade slider-tr-delay04 top-margin-30">
                    <div className="border-btn-box pointer-large">
                      <div className="border-btn-inner">
                        <a
                          href="#"
                          className="border-btn"
                          data-text="Portfolio"
                        >
                          Portfolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* column end */}
            </div>
            {/* flex-container end */}
          </div>
          {/* home-slider-content end */}
        </div>
        {/* swiper-slide end */}
        {/* swiper-slide start */}
        <div className="swiper-slide flex-min-height-box home-slide red-slide">
          {/* slide-bg */}
          <div
            className="slide-bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/bart-simpson-casual-close-up-1813947copy1.jpg)"
            }}
          />
          {/* home-slider-content start */}
          <div className="home-slider-content flex-min-height-inner red-bg">
            {/* flex-container start */}
            <div className="container top-bottom-padding-120  response-999">
              {/* column start */}
              <div className="six-columns">
                <h2 className="large-title-bold">
                  <span
                    className="slider-title-fill slider-tr-delay01"
                    data-text="We’re Ready"
                  >
                    We're Ready
                  </span>
                  <br />
                  <span
                    className="slider-title-fill slider-tr-delay02"
                    data-text="Are you?"
                  >
                    Are you?
                  </span>
                  <br />
                
                </h2>
                <div className="small-title-oswald text-height-20 d-flex-wrap top-margin-20">
                  <span
                    className="slider-title-fill slider-tr-delay04 top-margin-10"
                    data-text="Creative team"
                  >
                    Creative team
                  </span>
                  <span
                    className="slider-title-fill slider-tr-delay05 top-margin-10"
                    data-text="Innovative ideas"
                  >
                    Innovative ideas
                  </span>
                  <span
                    className="slider-title-fill slider-tr-delay06 top-margin-10"
                    data-text="Best services"
                  >
                    Best services
                  </span>
                </div>
                <div className="arrow-btn-box slider-fade slider-tr-delay06 top-margin-30">
                  <a href="#" className="arrow-btn pointer-large">
                    Lets Talk
                  </a>
                </div>
              </div>
              {/* column end */}
            </div>
            {/* flex-container end */}
          </div>
          {/* home-slider-content end */}
        </div>
        {/* swiper-slide end */}
      </div>
      {/* swiper-wrapper end */}
      {/* swiper-button-next start */}
      <div className="swiper-button-next">
        <div className="slider-arrow-next-box">
          <span className="slider-arrow-next" />
        </div>
      </div>
      {/* swiper-button-next end */}
      {/* swiper-button-prev start */}
      <div className="swiper-button-prev">
        <div className="slider-arrow-prev-box">
          <span className="slider-arrow-prev" />
        </div>
      </div>
      {/* swiper-button-prev end */}
      {/* swiper-pagination */}
      <div className="swiper-pagination" />
      {/* scroll-btn start */}
      <a href="#down" className="scroll-btn pointer-large">
        <div className="scroll-arrow-box">
          <span className="scroll-arrow" />
        </div>
        <div className="scroll-btn-flip-box">
          <span className="scroll-btn-flip" data-text="Scroll">
            Scroll
          </span>
        </div>
      </a>
      {/* scroll-btn end */}
    </section>
    {/* home-slider end */}
  </main>
</div>

    )
}

export default Header;
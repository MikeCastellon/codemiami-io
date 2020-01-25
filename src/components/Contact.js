import React, { Component } from 'react';
 

const Contact = () => {
    return (
        <div>
            <section id="contact" className="dark-bg-1 flex-min-height-box">
                {/* flex-min-height-inner start */}
                <div className="flex-min-height-inner">
                {/* container start */}
                <div className="container top-padding-120 bottom-padding-60" id='contact'>
                    <div data-animation-container>
                    <h2 className="large-title text-center">
                        <span
                        data-animation-child
                        className="title-fill"
                        data-animation="title-fill-anim"
                        data-text="Contact us"
                        >
                        Contact us
                        </span>
                    </h2>
                    <p
                        data-animation-child
                        className="p-style-small text-color-5 fade-anim-box tr-delay03"
                        data-animation="fade-anim"
                    >
                        Drop a line, whatever you need we are a couple clicks away. You could reach us through our social media, email, phone, or use the contact form below. Hope to hear from you soon!
                    </p>
                    </div>
                    {/* flex-container start */}
                    <div className="flex-container top-padding-90 contact-box">
                    {/* column start */}
                    <div className="four-columns bottom-padding-60">
                        <div data-animation-container className="content-right-margin-20">
                        <p
                            data-animation-child
                            className="small-title-oswald red-color overlay-anim-box2"
                            data-animation="overlay-anim2"
                        >
                            Email us
                        </p>
                        <p className="title-style text-color-4">
                            <span
                            data-animation-child
                            className="overlay-anim-box2 overlay-light-bg-1 tr-delay01"
                            data-animation="overlay-anim2"
                            >
                                Question
                                
                                
                            </span>
                            <br />
                            <span
                            data-animation-child
                            className="overlay-anim-box2 overlay-light-bg-1 tr-delay02"
                            data-animation="overlay-anim2"
                            >
                            Concern
                            </span>
                            
                        </p>
                        <h6
                            data-animation-child
                            className="flip-btn-box fade-anim-box tr-delay04"
                            data-animation="fade-anim"
                        >
                            <a
                            href="#"
                            className="flip-btn pointer-large"
                            data-text="info@codemiami.io"
                            >
                            <a href="mailto:info@codemiami.io" target="_top">info@codemiami.io</a>
                            </a>
                        </h6>
                        
                        </div>
                    </div>
                    {/* column end */}
               
                    {/* column start */}
                    <div className="four-columns bottom-padding-60">
                        <div data-animation-container className="content-left-margin-20">
                        <p
                            data-animation-child
                            className="small-title-oswald red-color overlay-anim-box2"
                            data-animation="overlay-anim2"
                        >
                            Call us
                        </p>
                        <p className="title-style text-color-4">
                            <span
                            data-animation-child
                            className="overlay-anim-box2 overlay-light-bg-1 tr-delay01"
                            data-animation="overlay-anim2"
                            >
                            Monday-Friday
                            </span>
                            <br />
                            <span
                            data-animation-child
                            className="overlay-anim-box2 overlay-light-bg-1 tr-delay02"
                            data-animation="overlay-anim2"
                            >
                            9:00AM - 7:30PM EST
                            </span>
                            
                           
                        </p>
                        <h6
                            data-animation-child
                            className="flip-btn-box fade-anim-box tr-delay04"
                            data-animation="fade-anim"
                        >
                            <a
                            href="#"
                            className="flip-btn pointer-large"
                            data-text="+23 8 8532 7834"
                            >
                            +23 8 8532 7834
                            </a>
                        </h6>
                        </div>
                    </div>
                    {/* column end */}
                    </div>
                    {/* flex-container end */}
                </div>
                {/* container end */}
                </div>
                {/* flex-min-height-inner end */}
            </section>
            {/* flex-min-height-box end */}
            {/* contact-form-box start */}
            <section
                className="contact-form-box flex-min-height-box"
                style={{
                backgroundImage:
                    "url(assets/images/backgrounds/pexels-photo-1287145.jpeg)"
                }}
            >
                <div className="bg-overlay" />
                {/* flex-min-height-inner start */}
                <div className="flex-min-height-inner">
                {/* container start */}
                <div className="container small top-bottom-padding-120">
                    <h4 className="small-title-oswald text-color-4 text-center">
                    Lets Get In Touch!
                    </h4>
                    {/* flex-container start */}
                    <form className="flex-container top-padding-90">
                    {/* column start */}
                    <div className="four-columns">
                        <div className="content-right-margin-10">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="contact-form-control pointer-small"
                        />
                        </div>
                    </div>
                    {/* column end */}
                    {/* column start */}
                    <div className="four-columns">
                        <div className="content-left-right-margin-5">
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            className="contact-form-control pointer-small"
                        />
                        </div>
                    </div>
                    {/* column end */}
                    {/* column start */}
                    <div className="four-columns">
                        <div className="content-left-margin-10">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="contact-form-control pointer-small"
                        />
                        </div>
                    </div>
                    {/* column end */}
                    {/* column start */}
                    <div className="twelve-columns">
                        <textarea
                        placeholder="Enter your message"
                        className="contact-form-control pointer-small"
                        defaultValue={""}
                        />
                    </div>
                    {/* column end */}
                    {/* column start */}
                    <div className="twelve-columns text-center top-padding-90">
                        <button className="border-btn-box pointer-large">
                        <span className="border-btn-inner">
                            <span className="border-btn" data-text="submit">
                            submit
                            </span>
                        </span>
                        </button>
                    </div>
                    {/* column end */}
                    </form>
                    {/* flex-container end */}
                </div>
                {/* container end */}
                </div>
                {/* flex-min-height-inner end */}
            </section>
            {/* contact-form-box end */}
            {/* animsition-overlay end */}
            </div>

    )
}

export default Contact;
import React from 'react';
import "./Feature.css";

export default function Feature() {
    return (
        <section className="projects-feautres">
            <div className="auto-container">
                <div className="row">
                    {/* <!-- Text Column --> */}
                    <div className="text-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="title">FEATURE Products</span>
                                <h2>A company involved in <br />servicing, maintenance of engines.</h2>
                                <div className="devider"><span className="fa fa-cogs"></span></div>
                            </div>
                            <div className="text">We are committed to providing our customers with exceptional service while offering our employees the best training and a working environment in which they can excel. This company focus has been in place for more than a half century.</div>
                            <div className="btn-box"><a href="#learn" className="theme-btn btn-style-two">Learn About</a></div>
                        </div>
                    </div>

                    {/* <!-- Blocks Column --> */}
                    <div className="blocks-column col-lg-6 col-md-12 col-sm-12">
                        {/* <!-- Feature BLock --> */}
                        <div className="feature-block ">
                            <div className="inner-box">
                                <span className="icon flaticon-idea"></span>
                                <h4>Creative Ideas</h4>
                                <div className="text">Sed quia non numquam eius modi tempora incidunt ut labore.</div>
                            </div>
                        </div>

                        {/* <!-- Feature BLock --> */}
                        <div className="feature-block block-two">
                            <div className="inner-box">
                                <span className="icon flaticon-tick-1"></span>
                                <h4>Super Safety</h4>
                                <div className="text">Sed quia non numquam eius modi tempora incidunt ut labore.</div>
                            </div>
                        </div>

                        {/* <!-- Feature BLock --> */}
                        <div className="feature-block block-three">
                            <div className="inner-box">
                                <span className="icon flaticon-worker"></span>
                                <h4>24/7 Support</h4>
                                <div className="text">Sed quia non numquam eius modi tempora incidunt ut labore.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

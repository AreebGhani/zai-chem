import React from 'react';
import "./CallBack.css";
import img from "../../assets/images/resource/image-3.jpg";

export default function CallBack() {
    return (
        <section className="call-back-section alternate">
            <div className="auto-container">
                <div className="row">
                    {/* <!-- Form Column --> */}
                    <div className="form-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="title">You Have any info</span>
                                <h2>Request A Quote</h2>
                                <div className="devider"><span className="fa fa-cogs"></span></div>
                            </div>
                            <div className="request-form">
                                {/* <!--Comment Form--> */}
                                <form method="post" action="">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="username" placeholder="Name" required />
                                        </div>

                                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Massage"></textarea>
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <button className="theme-btn btn-style-two" type="submit" name="submit-form">Submit Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <figure className="image wow zoomInLeft"><img src={img} alt="" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

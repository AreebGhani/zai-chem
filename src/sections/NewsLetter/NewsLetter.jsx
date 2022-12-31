import React from 'react';
import './NewsLetter.css';
import img from "../../assets/images/resource/worker-2.png";

export default function NewsLetter() {
    return (
        <section className="news-latters">
            <div className="auto-container">
                <div className="row">
                    {/* <!-- Form Column --> */}
                    <div className="form-column col-lg-7 col-md-12 col-sm-12 order-2">
                        <div className="inner-column">
                            <div className="sec-title light">
                                <span className="title">News Letter</span>
                                <h2>Join Our Community</h2>
                                <div className="devider"><span className="fa fa-cogs"></span></div>
                            </div>
                            <div className="text">Getting quality Industrial Care with Induzy is easier than ever.<br /> Let us treat your loved ones like family!</div>

                            <div className="newslatter-form">
                                <form method="post" action="">
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email Address" required="" />
                                    </div>

                                    <div className="form-group">
                                        <button className="theme-btn btn-style-four" type="submit" name="submit-form">Submit Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="image-column col-lg-5 col-md-12 col-sm-12">
                        <div className="image-box">
                            <figure className="image"><img src={img} alt="" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

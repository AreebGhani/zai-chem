import React from 'react';
import "./Footer.css";
import img1 from "../../assets/images/resource/post-thumb-1.jpg";
import img2 from "../../assets/images/resource/post-thumb-2.jpg";

export default function Footer() {
    return (
        <footer className="main-footer">
            {/* <!--footer upper--> */}
            <div className="footer-upper">
                <div className="auto-container">

                    <div className="row">
                        <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                {/* <!--Footer Column--> */}
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget about-widget">
                                        <div className="logo">
                                            <a href="index.html"><img src="images/footer-logo.png" alt="" /></a>
                                        </div>
                                        <div className="text">
                                            <p><strong>Industris</strong> has very good strength in innovative technology and tools with over 35 years of experience.</p>
                                            <p>We makes long-term investments goal in global companies in different sectors, mainly in Europe and other countries.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Footer Column--> */}
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    {/* <!--Footer Column--> */}
                                    <div className="footer-widget recent-posts">
                                        <h2 className="widget-title">Latest News</h2>
                                        {/* <!--Footer Column--> */}
                                        <div className="widget-content">
                                            <div className="post">
                                                <div className="thumb"><a href="blog-detail.html"><img src={img1} alt="" /></a></div>
                                                <h4><a href="blog-detail.html">We are best for any industrial solution.</a></h4>
                                                <span className="date">August 5, 2018</span>
                                            </div>

                                            <div className="post">
                                                <div className="thumb"><a href="blog-detail.html"><img src={img2} alt="" /></a></div>
                                                <h4><a href="blog-detail.html">We won best industry award of the year</a></h4>
                                                <span className="date">August 5, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="big-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                {/* <!--Footer Column--> */}
                                <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget services-widget">
                                        <h2 className="widget-title">Our Services</h2>
                                        <div className="widget-content">
                                            <ul className="serivce-list clearfix">
                                                <li><a href="#abc">Auto Motive</a></li>
                                                <li><a href="#abc">Agricultural</a></li>
                                                <li><a href="#abc">Mechanical</a></li>
                                                <li><a href="#abc">Manufactoriuring</a></li>
                                                <li><a href="#abc">Chemical Research</a></li>
                                                <li><a href="#abc">Oil & Gas Engineering</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Footer Column--> */}
                                <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget newslatter-widget">
                                        <h2 className="widget-title">Newsletter</h2>
                                        <div className="widget-content">
                                            <h4>SUBSCRIBE TO OUR NEWSLETTER!</h4>
                                            {/* <!--Subscribe Form--> */}
                                            <div className="newslatter-form">
                                                <form method="post" action="http://shmai.com/preview/manufactori-html/contact.html">
                                                    <div className="form-group">
                                                        <input type="email" name="email" value="" placeholder="Your email" required />
                                                        <button type="submit" className="theme-btn">Submit now</button>
                                                    </div>
                                                </form>
                                            </div>

                                            <ul className="social-icon-two">
                                                <li className="title">Follow Us:</li>
                                                <li><a href="#facebook"><i className="fa fa-facebook-f"></i></a></li>
                                                <li><a href="#google"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a href="#twitter"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#skype"><i className="fa fa-skype"></i></a></li>
                                                <li><a href="#linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--Footer Bottom--> */}
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="footer-nav">
                            <ul className="clearfix">
                                <li><a href="index.html">Privacy Policy</a></li>
                                <li><a href="about.html">Contact</a></li>
                                <li><a href="services.html">Supplier</a></li>
                            </ul>
                        </div>

                        <div className="copyright-text">
                            <p>2019 © All Rights Reserved by <a href="index.html">Shmai</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

import React from 'react';
import './ServicesInfo.css';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/images/resource/services-single.jpg';
import img2 from '../../assets/images/resource/post-image-1.jpg';
import { Process } from '../';

export default function ServicesInfo() {
    return (
        <div className="service-detail-section">
            <div className="auto-container">
                <div className="row clearfix">
                    {/* <!--Content Side--> */}
                    <div className="content-side col-xl-9 col-lg-8 col-md-12 col-sm-12">
                        <div className="service-detail">
                            {/* <!-- Image Box --> */}
                            <div className="image-box">
                                <NavLink to={img1} className="lightbox-image">
                                    <img src={img1} alt="" />
                                </NavLink>
                            </div>

                            <div className="lower-content">
                                <h2>Automotive Manufactoriuring Service</h2>
                                <p>Generate is one of leading company in manufacturing & petro chemical products. We makes long-term investments goal in global companies in different sectors, mainly in Europe and other countries. We provide cost-effective industrial solutions. Few can match for our promise to safety and commitment to your product development. We offer the cleanest line of services with latest technology, equipment.</p>
                                <p>Tectxon has completed hundreds of industrial projects in all industrial sectors. With a long list of products and never ending customer support we are able to guarantee a very high level of satisfaction for our clients.</p>

                                <div className="two-column">
                                    <div className="row clearfix">
                                        <div className="image-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                            <div className="image">
                                                <NavLink to={img2} className="lightbox-image">
                                                    <img src={img2} alt="" />
                                                </NavLink>
                                            </div>
                                        </div>

                                        <div className="info-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                                            <h2>Mechanical Strategy</h2>
                                            <p>The most likely cause is that prior to these profitable runs, was a period of mechanical-strategy-drawdown. Time and time again we see this pattern. The strategies have a short period of drawdown and everyone freaks out! So they quit, take a break, find another strategy, change their strategy or start skipping trades that don’t “feel good”. This is the WORST thing you can do when learning to trade a mechanical strategy.</p>
                                        </div>
                                    </div>
                                </div>


                                <h3>Our Work Benefits</h3>
                                <p>It all started with an aim, an aim to value the true potential of real China. The people that strive day in and day out to run one of the largest agrarian economies in the world are residents of villages and districts where financial stability is still at an arm’s length.But it was really passion and belief that saw us through. A single-minded passion to become the country’s greatest resource Internet. </p>
                                <ul className="service-list-style clearfix">
                                    <li>Great Technology</li>
                                    <li>Delivery On Time</li>
                                    <li>Certified Engineers</li>
                                    <li>Best Branding</li>
                                </ul>

                                <h3>Frontiers of Research</h3>
                                <p>Since these skills are required for virtually everything that is made, mechanical engineering is perhaps the broadest and most diverse of engineering disciplines</p>

                                <ul className="accordion-box style-two">


                                    {/* <!--Block--> */}
                                    <li className="accordion block active-block">
                                        <div className="acc-btn active">Micro electro-mechanical systems <div className="icon fa fa-long-arrow-right"></div></div>
                                        <div className="acc-content current">
                                            <div className="content">
                                                <div className="text">Pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master builder of human born and I will give you a complete account of the system.</div>
                                            </div>
                                        </div>
                                    </li>

                                    {/* <!--Block--> */}
                                    <li className="accordion block">
                                        <div className="acc-btn">Friction stir welding <div className="icon fa fa-long-arrow-right"></div></div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master builder of human born and I will give you a complete account of the system.</div>
                                            </div>
                                        </div>
                                    </li>

                                    {/* <!--Block--> */}
                                    <li className="accordion block">
                                        <div className="acc-btn">Composites <div className="icon fa fa-long-arrow-right"></div></div>
                                        <div className="acc-content">
                                            <div className="content">
                                                <div className="text">Pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master builder of human born and I will give you a complete account of the system.</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <Process />
                            </div>
                        </div>
                        {/* <!-- Service Detail --> */}
                    </div>

                    {/* <!--Sidebar Side--> */}
                    <div className="sidebar-side col-xl-3 col-lg-4 col-md-12 col-sm-12">
                        <aside className="sidebar services-sidebar">

                            {/* <!-- Services Cat List --> */}
                            <div className="sidebar-widget categories">
                                <ul className="services--list">
                                    <li><NavLink className="a" to="/services">All Services</NavLink></li>
                                    <li><NavLink className="a" to="/service-details/:id">Civil Engineering</NavLink></li>
                                    <li><NavLink className="a" to="/service-details/:id">Oil & Gas Engineering</NavLink></li>
                                    <li className="active"><NavLink className="a" to="/service-details/:id">Automotive Manufactoriuring</NavLink></li>
                                    <li><NavLink className="a" to="/service-details/:id">Chemical Engineering</NavLink></li>
                                    <li><NavLink className="a" to="/service-details/:id">Agriculture Engineering</NavLink></li>
                                    <li><NavLink className="a" to="/service-details/:id">Mechanical Engineering</NavLink></li>
                                </ul>
                            </div>

                            {/* <!--Brochure--> */}
                            <div className="sidebar-widget links-box">
                                <h4>Brochures Download</h4>
                                <div className="brochure-link">
                                    <a className="a" href="#p1"><i className="fa fa-file-pdf-o"></i> Project-One.pdf</a>
                                </div>

                                <div className="brochure-link">
                                    <a className="a" href="#p1"><i className="fa fa-file-word-o"></i> Project-One.wd</a>
                                </div>

                                <div className="brochure-link">
                                    <a className="a" href="#p1"><i className="fa fa-file-powerpoint-o"></i> Project-One.pdf</a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

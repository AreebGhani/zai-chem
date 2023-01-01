import React from 'react';
import './TeamMember.css';
import img from "../../assets/images/resource/team-single.jpg"

export default function TeamMember() {
    return (
        <section className="team-detail">
            <div className="auto-container">
                <div className="row">
                    {/* <!-- Image column --> */}
                    <div className="image-column col-lg-4 col-md-12 col-sm-12 order-2">
                        <div className="image-box">
                            <figure className="image"><img src={img} alt="" /></figure>
                        </div>
                    </div>

                    {/* <!-- Content Column --> */}
                    <div className="content-column col-lg-8 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="info-box">
                                <h4 className="name">Jone Michal</h4>
                                <span className="designation">( Electrical Engineer )</span>
                            </div>
                            <div className="text-box">
                                <p>Jone Michal is a Electric Engineer l Specialist with over 10 years experience of professional engineering discipline that generally deals with the study and application of electricity, electronics, and electromagnetism</p>
                                <p>An electrical engineer is someone who designs and develops new electrical systems, solves problems and tests equipment. They study and apply the physics and mathematics of electricity, electromagnetism and electronics to both large and small scale systems to process information and transmit energy. They work with all kinds of electronic devices, from the smallest pocket devices to large supercomputers.</p>
                                <p>UNSW's Electrical Engineering students learn through a combination of design and lab work. This mix of theory and practical application allows students to visualize concepts and then apply their ideas in a variety of real life situations. Students learn to analyse and diagnose problems and develop innovative solutions.</p>
                            </div>
                            <div className="row">
                                <div className="column col-lg-6 col-md-12">
                                    <ul className="contact-list">
                                        <li><span className="icon fa fa-volume-control-phone"></span> Call us <a className="a" href="tel:+49123456789">+49 1234 5678 9</a></li>
                                        <li><span className="icon fa fa-envelope"></span> <a className="a" href="mailto:info@industry.com">info@industry.com</a></li>
                                    </ul>
                                </div>
                                <div className="column col-lg-6 col-md-12">
                                    <ul className="social-links">
                                        <li className="title">Follow on: </li>
                                        <li><a className="a" href="#facebook"><span className="fa fa-facebook-f"></span></a></li>
                                        <li><a className="a" href="#twitter"><span className="fa fa-twitter"></span></a></li>
                                        <li><a className="a" href="#google"><span className="fa fa-google-plus"></span></a></li>
                                        <li><a className="a" href="#pinterest"><span className="fa fa-pinterest"></span></a></li>
                                        <li><a className="a" href="#dribbble"><span className="fa fa-dribbble"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

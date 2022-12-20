import React from 'react';
import "./About.css";
import { NavLink } from 'react-router-dom';
import image from "../../assets/images/resource/about-img.jpg";

export default function About() {
  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="row">
          {/* <!-- Content Column --> */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <span className="title">Welcome to </span>
              <h2>Zai Chemicals</h2>
              <div className="message"><span>Zai chem</span> is the production of goods or related services here with in an economy indicator of its relevant.</div>
              <div className="text" style={{ textAlign: "justify" }}>ZAICHEM established in 2004 owned by the Yusuf Zai Family. It engaged in Textile Business, Distribution, Trading, Polymerization and reactions for auxiliaries, manufacturing every kind of Chemicals from sizing to finishing and other Specialty Polymers.</div>
              <blockquote className="blockquote">
                <cite>Asif Ul Haq Khan, CEO</cite>
                <p>Many of our registered employees are requested as main preferred temporary staff when a service.</p>
                <span className="icon fa fa-quote-right"></span>
              </blockquote>
              <div className="btn-box"><NavLink to="/about" className="theme-btn btn-style-one a"><span className="btn-title">More About</span> <span className="icon fa fa-angle-double-right"></span></NavLink></div>
            </div>
          </div>
          {/* <!-- Image Column --> */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="image-box">
              <figure className="image"><img src={image} alt="" /></figure>
              <span className="link lightbox-image"><span className="fa fa-play"></span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { Navbar, StickyNavbar } from "../";

export default function Header() {
  return (
    <header className="main-header">
      {/* <!--Header Top--> */}
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="top-left">
              <div className="text">It Does Exactly What it Says</div>
            </div>
            <div className="top-right">
              <ul className="social-icon-one">
                <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header Top --> */}

      {/* <!--Header-Upper--> */}
      <div className="header-upper">
        <div className="auto-container">
          <div className="clearfix">
            <div className="pull-left logo-outer">
              <div className="logo"><Link to="/"><img src={logo} width="180" height="50" alt="" title="" /></Link></div>
            </div>
            <div className="pull-right upper-right clearfix">

              {/* <!--Info Box--> */}
              <div className="upper-column info-box">
                <div className="icon-box"><span className="flaticon-worldwide"></span></div>
                <ul>
                  <li>Callifeside BinghamatnManawala, <br />Sheikhupura Road, Faisalabad.</li>
                </ul>
              </div>

              {/* <!--Info Box--> */}
              <div className="upper-column info-box">
                <div className="icon-box"><span className="flaticon-clock-1"></span></div>
                <ul>
                  <li><strong>Timing</strong></li>
                  <li>Mon To Sat: 9:00am - 5:00pm</li>
                </ul>
              </div>

              {/* <!--Info Box--> */}
              <div className="upper-column info-box">
                <div className="icon-box"><span className="flaticon-mail"></span></div>
                <ul>
                  <li><strong>Email</strong></li>
                  <li><a href="mailto:info@zaichem.com ">info@zaichem.com </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--End Header Upper--> */}

      {/* <!--Header Lower--> */}
      <div className="header-lower">
        <div className="auto-container">
          <div className="main-box clearfix">
            <Navbar />
          </div>
        </div>
      </div>
      {/* <!--End Header Lower--> */}
      <StickyNavbar />
    </header>
  )
}

import React from 'react';
import "./Hero.css";
import { NavLink } from 'react-router-dom';
import video from "../../assets/images/main-slider/main_video.mp4";

export default function Hero() {
    const slides = [
        {
            url: video
        }
    ];

    return (
        <>
            <section className="main-slider">

                {
                    slides.map((slide, i) => {
                        return (
                            <div key={i}>
                                <video className="" autoPlay muted loop height="760px" >
                                    <source src={slide.url} type="video/mp4" />
                                    <source src={slide.url} type="video/ogg" />
                                </video>
                                <div className="content">
                                    <div className="tp-caption">
                                        <h4>We Provide</h4>
                                    </div>
                                    <div className="tp-caption">
                                        <h2>Best <span>Industrial</span> Service</h2>
                                    </div>
                                    <div className="tp-caption">
                                        <div className="text">We are the best guarenteed company to serve you. We are dedicated to help you any time.</div>
                                    </div>
                                    <div className="tp-caption tp-resizeme">
                                        <div className="btn-box">
                                            <NavLink to="/services" className="theme-btn btn-style-two a">Learn more <span className="fa fa-angle-double-right"></span></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </section>
        </>
    )
}

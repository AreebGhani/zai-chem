import React from 'react';
import "./Hero.css";
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import video from "../../assets/images/main-slider/main_video.mp4";

export default function Hero() {
    const slides = [
        {
            url: video
        },
        {
            url: video
        },
        {
            url: video
        },
    ];

    return (
        <>
            <section className="main-slider">
                <Carousel autoPlay={true} emulateTouch={false} infiniteLoop={true} showArrows={false}
                    showStatus={false} showIndicators={true} showThumbs={true} interval={5000}
                >
                    {
                        slides.map((slide, i) => {
                            return (
                                <div key={i}>
                                    <video autoPlay muted loop height="760px" >
                                        <source src={slide.url} type="video/mp4" />
                                        <source src={slide.url} type="video/ogg" />
                                    </video>
                                    <div className="content">
                                        <div className="tp-caption">
                                            <h4>
                                                We Provide
                                            </h4>
                                        </div>
                                        <div className="tp-caption mt-3">
                                            <h2>Best <span> Industrial </span> Service </h2>
                                        </div>
                                        <div className="tp-caption mt-3 w-75">
                                            <div className="text">
                                                We are the best guarenteed company to serve you. We are dedicated to help you any time.
                                            </div>
                                        </div>
                                        <div className="tp-caption mt-5 tp-resizeme">
                                            <div className="btn-box">
                                                <NavLink to="/services" className="theme-btn btn-style-two a">Learn more <span className="fa fa-angle-double-right"></span></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </section>
        </>
    )
}

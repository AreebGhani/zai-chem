import React, { useEffect, useState } from 'react';
import "./Hero.css";
import { NavLink } from 'react-router-dom';
import video from "../../assets/images/main-slider/main_video.mp4";
import { Carousel } from 'react-responsive-carousel';
import AnimatedText from 'react-animated-text-content';

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

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <section className="main-slider">
                <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} showArrows={false}
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
                                    {
                                        windowDimensions.width >= 699 ?
                                            <div className="content">
                                                <div className="tp-caption">
                                                    <AnimatedText
                                                        type="chars"
                                                        animation={{
                                                            x: '200px',
                                                            y: '-20px',
                                                            scale: 1.1,
                                                            ease: 'ease-in-out',
                                                        }}
                                                        animationType="float"
                                                        interval={0.06}
                                                        duration={1.0}
                                                        tag="p"
                                                        className="animated-paragraph h4"
                                                        includeWhiteSpaces
                                                        threshold={0.1}
                                                        rootMargin="20%"
                                                    >
                                                        We Provide
                                                    </AnimatedText>
                                                </div>
                                                <div className="tp-caption mt-3 caption">
                                                    <AnimatedText
                                                        type="chars"
                                                        animation={{
                                                            x: '200px',
                                                            y: '-20px',
                                                            scale: 1.1,
                                                            ease: 'ease-in-out',
                                                        }}
                                                        animationType="float"
                                                        interval={0.06}
                                                        duration={1.0}
                                                        tag="p"
                                                        className="animated-paragraph h2"
                                                        includeWhiteSpaces
                                                        threshold={0.1}
                                                        rootMargin="20%"
                                                    >
                                                        Best
                                                    </AnimatedText>
                                                    <AnimatedText
                                                        type="chars"
                                                        animation={{
                                                            x: '200px',
                                                            y: '-20px',
                                                            scale: 1.1,
                                                            ease: 'ease-in-out',
                                                        }}
                                                        animationType="float"
                                                        interval={0.06}
                                                        duration={1.0}
                                                        tag="p"
                                                        className="animated-paragraph span mx-2"
                                                        includeWhiteSpaces
                                                        threshold={0.1}
                                                        rootMargin="20%"
                                                    >
                                                        Industrial
                                                    </AnimatedText>
                                                    <AnimatedText
                                                        type="chars"
                                                        animation={{
                                                            x: '200px',
                                                            y: '-20px',
                                                            scale: 1.1,
                                                            ease: 'ease-in-out',
                                                        }}
                                                        animationType="float"
                                                        interval={0.06}
                                                        duration={1.0}
                                                        tag="p"
                                                        className="animated-paragraph h2"
                                                        includeWhiteSpaces
                                                        threshold={0.1}
                                                        rootMargin="20%"
                                                    >
                                                        Service
                                                    </AnimatedText>
                                                </div>
                                                <div className="tp-caption mt-3 w-75">
                                                    <AnimatedText
                                                        type="words"
                                                        animation={{
                                                            x: '200px',
                                                            y: '-20px',
                                                            scale: 1.1,
                                                            ease: 'ease-in-out',
                                                        }}
                                                        animationType="float"
                                                        interval={0.06}
                                                        duration={0.6}
                                                        tag="div"
                                                        className="animated-paragraph text"
                                                        includeWhiteSpaces
                                                        threshold={0.1}
                                                        rootMargin="20%"
                                                    >
                                                        We are the best guarenteed company to serve you. We are dedicated to help you any time.
                                                    </AnimatedText>
                                                </div>
                                                <div className="tp-caption mt-5 tp-resizeme">
                                                    <div className="btn-box">
                                                        <NavLink to="/services" className="theme-btn btn-style-two a">Learn more <span className="fa fa-angle-double-right"></span></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className="content">
                                                <div className="tp-caption">
                                                    <h4>
                                                        We Provide
                                                    </h4>
                                                </div>
                                                <div className="tp-caption mt-3">
                                                    <h2>
                                                        Best
                                                        <span className="mx-2">
                                                            Industrial
                                                        </span>
                                                        Service
                                                    </h2>
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
                                    }
                                </div>
                            )
                        })
                    }
                </Carousel>
            </section>
        </>
    )
}

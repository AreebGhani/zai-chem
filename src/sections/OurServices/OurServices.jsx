import React from 'react';
import "./OurServices.css";
import { NavLink } from 'react-router-dom';
import img1 from "../../assets/images/resource/service-1.jpg";
import img2 from "../../assets/images/resource/service-2.jpg";
import img3 from "../../assets/images/resource/service-3.jpg";

export default function OurServices({ theme }) {
    const ourServices = [
        {
            title: "Mechanical Engineering",
            img: img1,
            description: "It’s no secret that the digital industry is booming. From exciting startups to global brands, colo mpanies are reaching out todigital agencie, responding to the new possibilitie available....",
            icon: "icon fa fa-cogs",
        },
        {
            title: "Electrical & Power",
            img: img2,
            description: "It’s no secret that the digital industry is booming. From exciting startups to global brands, colo mpanies are reaching out todigital agencie, responding to the new possibilitie available....",
            icon: "icon fa fa-bolt",
        },
        {
            title: "Chemical Research",
            img: img3,
            description: "It’s no secret that the digital industry is booming. From exciting startups to global brands, colo mpanies are reaching out todigital agencie, responding to the new possibilitie available....",
            icon: "icon fa fa-flask",
        },
    ];

    return (
        <>
            <section className={theme === "two" || theme === "three" ? "services-section-two" : "services-section"}>
                <div className="auto-container">
                    <div className={theme === "two" || theme === "three" ? "sec-title text-center" : "sec-title text-center light"}>
                        <span className="title">Services</span>
                        <h2>Industry Soloution</h2>
                        {theme !== "two" && <div className="devider"><span className="fa fa-cogs"></span></div>}
                        {theme !== "three" && <div className="devider"><span className="fa fa-cogs"></span></div>}
                    </div>
                    {
                        theme === "two" ?
                            <div className="row">
                                {
                                    ourServices.map((service, i) => {
                                        return (
                                            <div key={i} className="service-block-two col-lg-4 col-md-6 col-sm-12">
                                                <div className="inner-box">
                                                    <div className="icon-box"><span className={service.icon}></span></div>
                                                    <h5><NavLink to="/services" className="a">{service.title}</NavLink></h5>
                                                    <div className="text">{service.description}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            theme === "three" ?
                                <div className="row">
                                    {
                                        ourServices.map((service, i) => {
                                            return (
                                                <div key={i} className="service-block-three col-lg-4 col-md-6 col-sm-12">
                                                    <div className="inner-box">
                                                        <div className="icon-box"><span className={service.icon}></span></div>
                                                        <h5><NavLink to="/services" className="a">{service.title}</NavLink></h5>
                                                        <div className="text">{service.description}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                :
                                <div className="services-carousel owl-carousel owl-theme">
                                    {/* <!-- Service Block --> */}
                                    {
                                        ourServices.map((service, i) => {
                                            return (
                                                <div key={i} className="service-block">
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <figure className="image"><img src={service.img} alt="" /></figure>
                                                            <div className="overlay-box">
                                                                <span className="icon fa fa-cogs"></span>
                                                                <h5><NavLink to="/services" className="a">{service.title}</NavLink></h5>
                                                                <div className="text">{service.description}</div>
                                                                <NavLink to="/services" className="read-more a">READ MORE</NavLink>
                                                            </div>
                                                        </div>
                                                        <div className="caption-box">
                                                            <span className={service.icon}></span>
                                                            <h4><NavLink to="/services" className="a">{service.title}</NavLink></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                    }
                </div>
            </section>
        </>
    )
}

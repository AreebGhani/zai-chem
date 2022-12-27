import React from 'react';
import "./WhyUs.css";
import img from "../../assets/images/resource/image-2.jpg";
import { NavLink } from 'react-router-dom';

export default function WhyUs() {

    const details = [
        {
            title: "Greate Technology",
            subTitle: "Best Sevice for you",
            icon: "icon flaticon-drilling-machine",
        },
        {
            title: "Delivery Ontime",
            subTitle: "Best Sevice for you",
            icon: "icon flaticon-back-in-time",
        },
        {
            title: "Certified Engineers",
            subTitle: "Best Sevice for you",
            icon: "icon flaticon-engineer",
        },
        {
            title: "Best Branding",
            subTitle: "Best Sevice for you",
            icon: "icon flaticon-marketing",
        },
    ]

    return (
        <section className="fluid-section-one alternate">
            <div className="outer-container clearfix">
                {/* <!--Content Column--> */}
                <div className="content-column">
                    <div className="inner-box">
                        <div className="sec-title">
                            <span className="title">Why is Merit Selection Better</span>
                            <h2>Why Choose Us</h2>
                            <div className="devider"><span className="fa fa-cogs"></span></div>
                        </div>
                        <div className="text">
                            <p>Manufactoriuring industry became a key sector of production and labour in European and North American countries during the Industrial Revolution, upsetting previous mercantile and feudal economies.</p>
                            <p>General repair & industrial and machinery. Our team up-to-date, sustainable custom manufacturing solutions. </p>
                        </div>

                        <ul className="choose-info clearfix">

                            {
                                details.map((detail, i) => {
                                    return (
                                        <li key={i}>
                                            <span className={detail.icon}></span>
                                            <h5><NavLink className="a" to="/services">{detail.title}</NavLink></h5>
                                            <p>{detail.subTitle}</p>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>

                {/* <!--Image Column--> */}
                <div className="image-column">
                    <figure className="image-box"><img src={img} alt="" /></figure>
                </div>
            </div>
        </section>
    )
}

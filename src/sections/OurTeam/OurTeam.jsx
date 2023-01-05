import React from 'react';
import "./OurTeam.css";
import { NavLink } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import img1 from "../../assets/images/resource/team-1.jpg";
import img2 from "../../assets/images/resource/team-2.jpg";
import img3 from "../../assets/images/resource/team-3.jpg";
import img4 from "../../assets/images/resource/team-4.jpg";

export default function OurTeam() {
    const members = [
        {
            name: "Latanya Julca",
            designation: "Constractor",
            img: img1,
            links: [
                {
                    icon: "fa fa-facebook-f",
                    url: "facebook.com",
                },
                {
                    icon: "fa fa-twitter",
                    url: "twitter.com",
                },
                {
                    icon: "fa fa-google-plus",
                    url: "google.com",
                },
                {
                    icon: "fa fa-pinterest",
                    url: "pinterest.com",
                },
            ],
        },
        {
            name: "Tamina Sretsars",
            designation: "Founder & CEO",
            img: img2,
            links: [
                {
                    icon: "fa fa-facebook-f",
                    url: "facebook.com",
                },
                {
                    icon: "fa fa-twitter",
                    url: "twitter.com",
                },
                {
                    icon: "fa fa-google-plus",
                    url: "google.com",
                },
                {
                    icon: "fa fa-pinterest",
                    url: "pinterest.com",
                },
            ],
        },
        {
            name: "Roman Katiayana",
            designation: "Founder & CEO",
            img: img3,
            links: [
                {
                    icon: "fa fa-facebook-f",
                    url: "facebook.com",
                },
                {
                    icon: "fa fa-twitter",
                    url: "twitter.com",
                },
                {
                    icon: "fa fa-google-plus",
                    url: "google.com",
                },
                {
                    icon: "fa fa-pinterest",
                    url: "pinterest.com",
                },
            ],
        },
        {
            name: "Jordan Sisomphou",
            designation: "Founder & CEO",
            img: img4,
            links: [
                {
                    icon: "fa fa-facebook-f",
                    url: "facebook.com",
                },
                {
                    icon: "fa fa-twitter",
                    url: "twitter.com",
                },
                {
                    icon: "fa fa-google-plus",
                    url: "google.com",
                },
                {
                    icon: "fa fa-pinterest",
                    url: "pinterest.com",
                },
            ],
        },
    ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="team-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="title">Our Team</span>
                    <h2>Our Expert Members</h2>
                    <div className="devider"><span className="fa fa-cogs"></span></div>
                </div>

                <div className="team-carousel owl-carousel owl-theme">
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    >
                        {
                            members.map((member, i) => {
                                return (
                                    <div key={i} className="team-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><NavLink className="a" to="/team"><img src={member.img} alt="" /></NavLink></figure>
                                                <ul className="social-links">
                                                    {member.links.map((link, i) => <li key={i}><a href={link.url}><span className={link.icon}></span></a></li>)}
                                                </ul>
                                            </div>
                                            <div className="caption-box">
                                                <h5 className="name"><NavLink className="a" to="/team">{member.name}</NavLink></h5>
                                                <span className="description">{member.designation}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

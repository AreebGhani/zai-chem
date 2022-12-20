import React from 'react';
import "./News.css";
import { NavLink } from 'react-router-dom';
import img1 from "../../assets/images/resource/news-1.jpg";
import img2 from "../../assets/images/resource/news-2.jpg";

export default function News() {
    const blogs = [
        {
            title: "Colgate-Palmolive Renews with Morz in Malaysia",
            description: "Singapore 16 January 2018 – Morz Logistics, one of the world’s largest supply chain management companies, has",
            imgs: [{ url: img1 }],
            by: "Alitona Monaga",
            time: "December 17, 2018",
        },
        {
            title: "Oil Prices Rise as Investors Focus on U.S. Database",
            description: "Oil futures climbed toward the $50 level on Thursday, driven higher by a bullish outlook following weekly U.S.",
            imgs: [{ url: img2 }],
            by: "Alitona Monaga",
            time: "December 17, 2018",
        },
    ];
    return (
        <section className="news-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="title">Our Blogs</span>
                    <h2>Our Latest New & Artical</h2>
                    <div className="devider"><span className="fa fa-cogs"></span></div>
                </div>

                <div className="row">
                    {
                        blogs.map((blog, i) => {
                            return (
                                <div key={i} className="news-block col-lg-6 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <div className="single-item-carousel owl-carousel owl-theme">
                                                {blog.imgs.map((img, i) => <figure className="image"><NavLink className="a" to="/blog"><img src={img.url} alt="" /></NavLink></figure>)}
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <ul className="post-info">
                                                <li>{blog.time}</li>
                                                <li>By : {blog.by}</li>
                                            </ul>
                                            <h3><NavLink to="blog" className="a">{blog.title}</NavLink></h3>
                                            <div className="text">{blog.description}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

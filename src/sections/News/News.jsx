import React from 'react';
import "./News.css";
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/images/resource/news-1.jpg";
import img2 from "../../assets/images/resource/news-2.jpg";
import img3 from "../../assets/images/resource/blog-1.jpg";
import img4 from "../../assets/images/resource/blog-2.jpg";
import img5 from "../../assets/images/resource/blog-3.jpg";
import img6 from "../../assets/images/resource/post-image-2.jpg";
import img7 from "../../assets/images/resource/post-image-3.jpg";

export default function News({ theme }) {
    const blogs = [
        {
            title: "Colgate-Palmolive Renews with Morz in Malaysia",
            description: "Singapore 16 January 2018 – Morz Logistics, one of the world’s largest supply chain management companies, has",
            imgs: [{ url: img1 }],
            by: "Alitona Monaga",
            time: "December 17, 2018",
            comments: "03",
        },
        {
            title: "Oil Prices Rise as Investors Focus on U.S. Database",
            description: "Oil futures climbed toward the $50 level on Thursday, driven higher by a bullish outlook following weekly U.S.",
            imgs: [{ url: img2 }],
            by: "Alitona Monaga",
            time: "December 17, 2018",
            comments: "03",
        },
    ];
    return (
        <>
            {
                theme === "two" ?
                    <>
                        <div className="sidebar-page-container">
                            <div className="auto-container">
                                <div className="row clearfix">
                                    {/* <!--Content Side--> */}
                                    <div className="content-side col-lg-12 col-md-12 col-sm-12">
                                        <div className="blog-detail">
                                            {/* <!-- News Block --> */}
                                            <div className="news-block-three">
                                                <div className="inner-box">
                                                    <div className="image-box wow fadeIn">
                                                        <div className="single-item-carousel owl-carousel owl-theme">
                                                            <Carousel autoPlay={true} emulateTouch={true} infiniteLoop={true} showArrows={true}
                                                                showStatus={false} showIndicators={true} showThumbs={true}
                                                            >
                                                                <figure className="image"><img src={img3} alt="" /></figure>
                                                                <figure className="image"><img src={img4} alt="" /></figure>
                                                                <figure className="image"><img src={img5} alt="" /></figure>
                                                            </Carousel>
                                                        </div>
                                                    </div>
                                                    <div className="lower-content">

                                                        <h4>Colgate-Palmolive Renews with Morz in Malaysia Soon</h4>
                                                        <p>Manufactoriurers create physical goods. How these goods are created varies depending on the specific company and industry. However, most manufacturers use machinery and industrial equipment to produce goods for public consumption. The manufacturing process creates value, meaning companies can charge a premium for what they create. For example, rubber is not particularly valuable on its own. But when it is formed into a car tire, it holds substantially more value. </p>
                                                        <h5>Beverage and tobacco product manufacturing:</h5>
                                                        <p>Interestingly, tobacco and beverages are in the same sector of manufacturing. Beverage products include those that are non-alcoholic, as well as those that are alcoholic through the fermentation or distillation process. Ice is also considered a manufactured beverage. Tobacco products are loose tobacco products, as well as those that are in cigarette or cigar form.</p>
                                                        <div className="post-images">
                                                            <div className="row">
                                                                <div className="columnn col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                                                    <figure className="image"><img src={img6} alt="" /></figure>
                                                                </div>

                                                                <div className="columnn col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                                                    <figure className="image"><img src={img7} alt="" /></figure>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <blockquote className="clearfix">
                                                            <span className="icon fa fa-quote-left"></span>
                                                            <p>Today’s advancement of computer technology allows manufacturers to do more with less time. Now, thousands of items can be manufactured within the space of minutes. Computer technology can be used to assemble, test and track production. </p>
                                                            <cite>Ronagi Morna</cite>
                                                        </blockquote>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-page-container">
                            <div className="auto-container">
                                <div className="row clearfix">
                                    {/* <!--Content Side--> */}
                                    <div className="content-side col-lg-12 col-md-12 col-sm-12">
                                        <div className="blog-default">
                                            {
                                                blogs.map((blog, i) => {
                                                    return (
                                                        <div key={i} className="news-block-three wow fadeIn">
                                                            <div className="inner-box">
                                                                <h4><NavLink to="blog" className="a">{blog.title}</NavLink></h4>
                                                                <ul className="info clearfix">
                                                                    <li><i className="fa fa-calendar"></i><NavLink to="/blog" className="a"> {blog.time}</NavLink></li>
                                                                    <li><i className="fa fa-user"></i><NavLink to="/blog" className="a"> {blog.by}</NavLink></li>
                                                                    <li><i className="fa fa-comments"></i><NavLink to="/blog" className="a"> Comments {blog.comments}</NavLink></li>
                                                                </ul>

                                                                <div className="image-box">
                                                                    <figure className="image">
                                                                        <img src={blog.imgs[0].url} alt="" />
                                                                    </figure>
                                                                    <div className="icon-box"><span className="icon fa fa-image"></span></div>
                                                                </div>

                                                                <div className="lower-content">
                                                                    <div className="text">{blog.description}...</div>
                                                                    <div className="link-box"><NavLink to="/blog" className="a">Read More <i className="fa fa-angle-double-right"></i></NavLink></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
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
                                                            {blog.imgs.map((img, i) => <figure key={i} className="image"><NavLink className="a" to="/blog"><img src={img.url} alt="" /></NavLink></figure>)}
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
            }
        </>
    )
}

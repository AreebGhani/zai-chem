import React from 'react';
import './ProductInfo.css';
import img1 from '../../assets/images/product_detail/3.jpg';
import img2 from '../../assets/images/product_detail/4.jpg';
import img3 from '../../assets/images/resource/video-img.jpg';

export default function ProductInfo({ theme }) {
    return (
        <section className="project-detail">
            <div className="auto-container">
                <div className="inner-container">

                    {/* <!-- Title Box --> */}
                    <div className="title-box">
                        <h2>Products we deal in</h2>
                        <div className="text">Deals in all kind of textile auxiliaries and sizing material.</div>
                    </div>
                    {/* <!-- Project Carousel  --> */}
                    <div className="single-item-carousel owl-carousel owl-theme">

                        <div className="image-box" >
                            <figure className="image"><a href="images/product_detail/3.jpg" className="lightbox-image a"><img src={img1} alt="" height="inherit" /></a></figure>
                        </div>

                        <div className="image-box" >
                            <figure className="image"><a href="images/product_detail/4.jpg" className="lightbox-image a"><img src={img2} alt="" height="inherit" /></a></figure>
                        </div>

                    </div>
                    {
                        theme === "two" &&
                        <div className="upper-box">
                            <ul className="project-info clearfix">
                                <li><span className="icon fa fa-universal-access"></span><strong>Client :</strong> TransGas</li>
                                <li><span className="icon fa fa-globe"></span><strong>Investors Website :</strong> <a href="#click" className="a">www.clickhere.com</a></li>
                                <li><span className="icon fa fa-dollar"></span><strong>Value :</strong> $1.299.525,00</li>
                                <li><span className="icon fa fa-map"></span><strong>Location :</strong> Slovenija, Ljubljana</li>
                                <li><span className="icon fa fa-calendar"></span><strong>Construction Date :</strong> October 2015</li>
                            </ul>
                        </div>
                    }

                    Lower Content
                    <div className="lower-content">
                        <h3>Our client’s challenge</h3>
                        <p>In October 2015, the TransGas Prud’homme Gas Storage Caverns in Saskatchewan were left ablaze after a significant explosion which occurred at the principal wellhead. Gas production from this facility is crucial during the winter when natural gas demands are the highest. It was therefore critical that the facility was repaired in time before the cold set in. </p>
                        <div className="two-column row">
                            <div className="column col-lg-6 col-md-12 col-sm-12 order-2">
                                <h3>Our approach</h3>
                                <p>In order to meet the required schedule, TransGas delegated procurement and construction management services to WSP. WSP’s procurement procedures allowed for the selection of contractors and material suppliers in an efficient manner while still ensuring traceability for insurance auditors. The tight schedule for the emergency repairs required a collaborative effort between the Saskatchewan Industrial group (Products Management, Mechanical Engineering and Structural Engineering) and the Calgary Oil & Gas group (Electrical Engineering and Procurement Services).</p>
                                <br />
                                <h3>Outcome</h3>
                                <p> The $4 million Products was successfully completed in two separate phases with both phases  coming in on schedule and the overall costs coming in under budget. Emergency repairs to the facility were completed on December 11th, 2014 which allowed for the facility to operate through the critical winter months. Permanent electrical repairs along with less critical site deficiencies were completed in April and May of 2016 when a longer facility shut-down could be tolerated.</p>
                            </div>
                            <div className="column col-lg-6 col-md-12 col-sm-12">
                                <div className="video-box">
                                    <figure className="image"><img src={img3} alt="" /></figure>
                                    <a href="#play" className="link a"><span className="icon fa fa-play"></span></a>
                                </div>

                                <div className="project-files">
                                    <h4>Mor Products Detail Download File</h4>
                                    <ul className="file-list clearfix">
                                        <li><a className="a" href="#pdf"><span className="icon fa fa-file-pdf-o"></span> PDF - File</a></li>
                                        <li><a className="a" href="#word"><span className="icon fa fa-file-word-o"></span> Word - File</a></li>
                                        <li><a className="a" href="#excel"><span className="icon fa fa-file-excel-o"></span> Excel - File</a></li>
                                        <li><a className="a" href="#powerpoint"><span className="icon fa fa-file-powerpoint-o"></span> Powerpoint - File</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        theme === "two" &&
                        <div className="load-more-option">
                            <ul className="clearfix">
                                <li className="prev pull-left"><a className="a" href="#previous">Previous</a></li>
                                <li className="load-more"><a className="a" href="#icon"><span className="fa fa-th"></span></a></li>
                                <li className="next pull-right"><a className="a" href="#next">NEXT</a></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

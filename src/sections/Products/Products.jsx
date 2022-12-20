import React from 'react';
import "./Products.css";
import { NavLink } from 'react-router-dom';
import img1 from "../../assets/images/resource/image-1.jpg";
import img2 from "../../assets/images/resource/project-1.jpg";

export default function Products() {
  return (
    <section className="project-section">
      <div className="layer-image"><img src={img1} alt="" /></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="title">inspirations</span>
          <h2>Our Recent Products</h2>
          <div className="devider"><span className="fa fa-cogs"></span></div>
        </div>
        <div className="project-carousel owl-carousel owl-theme active">
          <div className="project-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><span className="lightbox-image"><img src={img2} alt="" /></span></figure>
              </div>
              <div className="content-box">
                <h4><NavLink to="/products" className="a">Oil Refinery Poart</NavLink></h4>
                <div className="text">From field trips to teacher resources, MSI provides learning experiences both inside and outside the classroom—because improving science education is critical.</div>
                <NavLink to="/products" className="read-more a">Read More</NavLink>
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/products" className="a view-more">View All</NavLink>
      </div>
    </section>
  )
}

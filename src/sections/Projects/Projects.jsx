import React from 'react';
import "./Projects.css";
import { NavLink } from 'react-router-dom';
import img1 from "../../assets/images/resource/image-1.jpg";
import img2 from "../../assets/images/resource/project-1.jpg";
import img3 from "../../assets/images/gallery/1.jpg";
import img4 from "../../assets/images/gallery/2.jpg";
import img5 from "../../assets/images/gallery/5.jpg";
import img6 from "../../assets/images/gallery/6.jpg";
import img7 from "../../assets/images/gallery/7.jpg";

export default function Projects({ theme }) {
  const ourProjects = [
    {
      name: "Mechanical Engineering",
      category: "Checking Mechanice",
      img: img3,
    },
    {
      name: "Mechanical Engineering",
      category: "Checking Mechanice",
      img: img4,
    },
    {
      name: "Mechanical Engineering",
      category: "Checking Mechanice",
      img: img5,
    },
    {
      name: "Mechanical Engineering",
      category: "Checking Mechanice",
      img: img6,
    },
    {
      name: "Mechanical Engineering",
      category: "Checking Mechanice",
      img: img7,
    },
  ]
  return (
    <>
      {
        theme === "two" ?
          <section className="projects-page-section">
            <div className="auto-container">
              {/* <!--Sortable Masonry--> */}
              <div className="sortable-masonry">
                {/* <!--Filter--> */}
                <div className="filters">
                  <ul className="filter-tabs filter-btns clearfix">
                    <li className="active filter" >All Cases</li>
                    <li className="filter" >Agriculture</li>
                    <li className="filter" >Chemical</li>
                    <li className="filter" >Construction</li>
                    <li className="filter" >Industrial</li>
                    <li className="filter" >Oil & Gas</li>
                  </ul>
                </div>
              </div>

              <div className="items-container row">
                {
                  ourProjects.map((project, i) => {
                    return (
                      <div key={i} className="project-block-two all masonry-item oil-and-gas construction col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image"><img src={project.img} alt="" /></figure>
                          </div>
                          <div className="overlay-box">
                            <div className="upper-box">
                              <h4><NavLink to="/products" className="a">{project.name}</NavLink></h4>
                              <span className="category">{project.category}</span>
                            </div>
                            <NavLink to="/products" className="link a">Read More</NavLink>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              <div className="btn-box text-center">
                <NavLink to="/products" className="a theme-btn btn-style-two">View More <span className="fa fa-angle-double-right"></span></NavLink>
              </div>
            </div>
          </section>
          :
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
      }
    </>
  )
}

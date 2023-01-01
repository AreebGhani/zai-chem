import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { NavLink, useLocation } from 'react-router-dom';

export const NavLinks = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/about',
    menu: [
      {
        name: 'About',
        to: '/about',
      },
      {
        name: 'Team',
        to: '/team',
      },
      {
        name: 'Team Detail',
        to: '/team-details/:id',
      },
    ]
  },
  {
    name: 'Services',
    to: '/services',
    menu: [
      {
        name: 'All Services',
        to: '/services',
      },
      {
        name: 'Service Detail',
        to: '/service-details/:id',
      },
    ]
  },
  {
    name: 'Products',
    to: '/products',
    menu: [
      {
        name: 'Products',
        to: '/products',
      },
      {
        name: 'Products Detail',
        to: '/product-details/:id',
      },
      {
        name: 'Literature Review',
        to: '/literature-review',
      },
    ]
  },
  {
    name: 'Blog',
    to: '/blog',
    menu: [
      {
        name: 'Blog',
        to: '/blog',
      },
      {
        name: 'Blog Detail',
        to: '/blog-details/:id',
      },
    ]
  },
  {
    name: 'Contact',
    to: '/contact',
  },
]

export default function Navbar() {

  const { pathname } = useLocation();

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

  const [toggleDropdown, setToggleDropdown] = useState({
    i: false,
    className: "none"
  });

  const handleToggleDropdown = i => {
    toggleDropdown.className === "none" ?
      setToggleDropdown({
        i,
        className: "show"
      })
      :
      setToggleDropdown({
        i,
        className: "none"
      });
  }

  return (
    <div className="nav-outer">
      {/* <!-- Main Menu --> */}
      <nav className="main-menu navbar-expand-md navbar-dark">
        <div className="navbar-header">
          {/* <!-- Toggle Button --> */}
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse clearfix" id="navbarResponsive">
          <ul className="navigation clearfix">
            {
              NavLinks.map((navlink, i) => {
                return (
                  <li key={i} className={pathname.slice(1) === navlink.name.toLowerCase() ? navlink.menu ? "dropdown active" : "active" : navlink.menu && "dropdown"}>
                    <NavLink className={(navColor) => navColor.isActive ? "a current" : "a"} to={navlink.to}>{navlink.name}</NavLink>
                    {
                      navlink.menu &&
                      <ul className={toggleDropdown.i === i ? toggleDropdown.className : ""}>
                        {
                          navlink.menu.map((subMenu, i) => {
                            return (
                              <li key={i}>
                                <NavLink className="a" to={subMenu.to}>{subMenu.name}</NavLink>
                              </li>
                            )
                          })
                        }
                      </ul>
                    }
                    {navlink.menu && windowDimensions.width < 768 && <div className="dropdown-btn" onClick={() => handleToggleDropdown(i)}><span className="fa fa-angle-down"></span></div>}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
      {/* <!-- Main Menu End--> */}

      <div className="outer-box">
        {/* <!--Search Box--> */}
        <div className="search-box-outer">
          <div className="dropdown">
            <button className="search-box-btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fa fa-search"></span></button>
            <ul className="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
              <li className="panel-outer">
                <div className="form-container">
                  <form method="post" action="">
                    <div className="form-group">
                      <input type="search" name="field-name" placeholder="Search Here" required />
                      <button type="submit" className="search-btn"><span className="fa fa-search"></span></button>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="btn-box">
          <NavLink to="/contact" className="a theme-btn btn-style-one"><span className="btn-title">Get A Quote </span></NavLink>
        </div>
      </div>
    </div>
  )
}

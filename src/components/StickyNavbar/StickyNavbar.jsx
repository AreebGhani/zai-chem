import React, { useState, useEffect } from 'react'
import logo from "../../assets/images/logo-small.png";
import "./StickyNavbar.css";
import { NavLink } from 'react-router-dom';
import { NavLinks } from "../Navbar/Navbar";

export default function StickyNavbar() {

  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > 55) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

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
    <>
      <div className={show ? "sticky-header fixed-header" : "sticky-header"}>
        <div className="auto-container clearfix">
          {/* <!--Logo--> */}
          <div className="logo pull-left">
            <NavLink to="/" className="a" title=""><img src={logo} width="130" height="50" alt="" title="" /></NavLink>
          </div>
          {/* <!--Right Col--> */}
          <div className="pull-right">
            {/* <!-- Main Menu --> */}
            <nav className="main-menu navbar-expand-md navbar-dark">
              <div className="navbar-collapse collapse clearfix">
                <ul className="navigation clearfix">
                  {
                    NavLinks.map((navlink, i) => {
                      return (
                        <li key={i} className={navlink.menu && "dropdown"}>
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
          </div>
        </div>
      </div>
    </>
  )
}

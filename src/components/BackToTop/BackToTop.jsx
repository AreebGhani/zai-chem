import React, { useEffect, useState } from 'react';
import "./BackToTop.css";

export default function BackToTop() {

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

    const ScrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return <div className={show ? "scroll-to-top scroll-to-target show" : "scroll-to-top scroll-to-target hide"} onClick={ScrollToTop}><span className="fa fa-angle-up"></span></div>
}

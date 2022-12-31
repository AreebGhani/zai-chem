import React from 'react';
import Router from './../router/Router';
import { BackToTop, Cta, Footer, Header } from '../components';
import { useLocation } from 'react-router-dom';

export default function Layout() {
    const { pathname } = useLocation();
    return (
        <>
            <div className="page-wrapper">
                {pathname === "/" ? <Header /> : <Header theme="dark" />}
                <Router />
                <Cta />
                {pathname === "/" || pathname === "/services" || pathname === "/products" ? <Footer /> : <Footer theme="dark" />}
            </div>
            <BackToTop />
        </>
    )
}

import React from 'react';
import { Header, Cta, Footer, BackToTop } from '../components';
import Router from './../router/Router';

export default function Layout() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Router />
                <Cta />
                <Footer />
            </div>
            <BackToTop />
        </>
    )
}

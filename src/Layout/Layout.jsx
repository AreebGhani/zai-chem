import React from 'react';
import { BackToTop } from '../components';
import Router from './../router/Router';

export default function Layout() {
    return (
        <>
            <div className="page-wrapper">
                <Router />
            </div>
            <BackToTop />
        </>
    )
}

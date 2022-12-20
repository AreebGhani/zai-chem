import React from 'react';
import { Header } from '../components';
import Router from './../router/Router';

export default function Layout() {
    return (
        <div className="page-wrapper">
            <Header />
            <Router />
        </div>
    )
}

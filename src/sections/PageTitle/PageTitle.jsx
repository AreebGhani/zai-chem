import React from 'react';
import "./PageTitle.css";
import { NavLink } from 'react-router-dom';

export default function PageTitle({ page }) {
    return (
        <section className="page-title">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="outer-box">
                        <div className="inner clearfix">
                            <h1>{page}</h1>
                            <ul className="bread-crumb clearfix">
                                <li><NavLink className="a" to="/">Home</NavLink></li>
                                <li>{page}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

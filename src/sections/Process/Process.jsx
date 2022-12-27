import React from 'react';
import "./Process.css";
import { NavLink } from 'react-router-dom';

export default function Process() {

    const processBlock = [
        {
            title: "Products CONCEPT",
            subTitle: "Your Basic Idea",
            icon: "icon flaticon-project-management",
        },
        {
            title: "RESEARCH",
            subTitle: "Firstly & Demand",
            icon: "icon flaticon-research-1",
        },
        {
            title: "IMPLEMENT PLAN",
            subTitle: "Begin to Develop",
            icon: "icon flaticon-conveyor-1",
        },
    ]

    return (
        <section className="process-section alternate">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="title">OUR WORK vPROCES</span>
                    <h2>How Does It Works</h2>
                    <div className="devider"><span className="fa fa-cogs"></span></div>
                </div>

                <div className="row">
                    {/* <!-- Process Block --> */}

                    {
                        processBlock.map((block, i) => {
                            return (
                                <div key={i} className="process-block col-lg-4 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <span className="count">0{++i}</span>
                                        <div className="icon-box"><span className={block.icon}></span></div>
                                        <h4><NavLink className="a" to="/products">{block.title}</NavLink></h4>
                                        <span className="title">{block.subTitle}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

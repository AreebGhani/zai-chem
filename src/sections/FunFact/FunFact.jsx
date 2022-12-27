import React from 'react';
import "./FunFact.css";
import CountUp from 'react-countup';

export default function FunFact({ theme }) {

    const counter = [
        {
            first: "Professional",
            second: "Engineers",
            icon: "icon flaticon-worker",
            number: 591,
        },
        {
            first: "Industry",
            second: "Products",
            icon: "icon flaticon-gears",
            number: 898,
        },
        {
            first: "Factories",
            second: "WordWide",
            icon: "icon flaticon-factory",
            number: 591,
        },
        {
            first: "Satisfied",
            second: "Customers",
            icon: "icon flaticon-robot-arm",
            number: 681,
        },
    ];

    return (
        <section className={theme === 'dark' ? 'fun-fact-section style-two' : 'fun-fact-section'}>
            <div className="auto-container">
                <div className="fact-counter">
                    <div className="row clearfix">
                        {
                            counter.map((count, i) => {
                                return (
                                    <div key={i} className="counter-column col-lg-3 col-md-6 col-sm-12">
                                        <div className="count-box">
                                            <span className={count.icon}></span>
                                            <h4 className="counter-title">{count.first} <br /> {count.second}</h4>
                                            <span className="count-text"><CountUp end={count.number} /></span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

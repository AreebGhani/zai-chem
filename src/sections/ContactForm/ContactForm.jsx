import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
    return (
        <section className="contact-form-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="title">Contact Us</span>
                    <h2>Get in Touch</h2>
                    <div className="devider">v<span className="fa fa-cogs"></span></div>
                    <div className="text">Hae questions about our industry marketing services? let’s talk about how we can help you achieve your goals<br /> and take your business to the top! </div>
                </div>
                {/* <!-- Contact Form --> */}
                <div className="contact-form">
                    <form method="post" action="" id="contact-form">
                        <div className="row">
                            <div className="form-group col-lg-4 col-md-12">
                                <input type="text" name="username" placeholder="Name" required />
                            </div>

                            <div className="form-group col-lg-4 col-md-12">
                                <input type="email" name="email" placeholder="Email" required />
                            </div>

                            <div className="form-group col-lg-4 col-md-12">
                                <input type="text" name="phone" placeholder="Phone" required />
                            </div>

                            <div className="form-group col-lg-12 col-md-12">
                                <textarea name="message" placeholder="Massage" required></textarea>
                            </div>

                            <div className="form-group col-lg-12 col-md-12 text-center">
                                <button className="theme-btn btn-style-four" type="submit" name="submit-form">Send Massage</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

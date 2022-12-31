import React from 'react';
import './ContactInfo.css';

export default function ContactInfo() {
    return (
        <section class="contact-info-section style-three">
            <div class="auto-container">
                <div class="row">
                    {/* <!-- Contact Info Block --> */}
                    <div class="title-column col-lg-5 col-md-12 col-sm-12">
                        <h2><span>Get</span> in Touch</h2>
                        <div class="text">You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</div>
                    </div>

                    {/* <!-- Block Column --> */}
                    <div class="block-column col-lg-7 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="row">
                                <div class="contact-info-block col-lg-6 col-md-6 col-sm-12">
                                    <div class="inner">
                                        <span class="icon flaticon-call-1"></span>
                                        <h3>Call us on</h3>
                                        <div class="info"><a href="tel:222-121-4562">222-121-4562</a></div>
                                    </div>
                                </div>

                                <div class="contact-info-block col-lg-6 col-md-6 col-sm-12">
                                    <div class="inner">
                                        <span class="icon flaticon-mails"></span>
                                        <h3>Email us</h3>
                                        <div class="info"><a href="mailto:support@gmail.com">support@gmail.com</a></div>
                                    </div>
                                </div>

                                <div class="contact-info-block col-lg-6 col-md-6 col-sm-12">
                                    <div class="inner">
                                        <span class="icon flaticon-clock-2"></span>
                                        <h3>Opening Hours</h3>
                                        <div class="info">Monday - Satureday <br />9:00 am  to  5pm</div>
                                    </div>
                                </div>

                                <div class="contact-info-block col-lg-6 col-md-6 col-sm-12">
                                    <div class="inner">
                                        <span class="icon flaticon-power"></span>
                                        <h3>Address</h3>
                                        <div class="info">E44, Design Street, Web <br />Corner Melbourne.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

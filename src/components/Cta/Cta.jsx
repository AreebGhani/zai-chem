import React from 'react';
import './Cta.css';

export default function Cta() {
  return (
    <section className="contact-info-section">
      <div className="auto-container">
        <div className="row">
          {/* <!-- Contact Info Block --> */}
          <div className="title-column col-lg-6 col-md-12 col-sm-12">
            <h2><span>Get</span> in Touch</h2>
            <div className="text">You will find yourself working in a true partnership that results in an incredible experience, and an end product that is the best.</div>
          </div>

          {/* <!-- Block Column --> */}
          <div className="block-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="row">
                {/* <!-- Info Block --> */}
                <div className="contact-info-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner">
                    <span className="icon flaticon-call-1"></span>
                    <h3>Call us on</h3>
                    <div className="info"><a href="tel:222-121-4562">222-121-4562</a></div>
                  </div>
                </div>

                {/* <!-- Info Block --> */}
                <div className="contact-info-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner">
                    <span className="icon flaticon-mails"></span>
                    <h3>Email us</h3>
                    <div className="info"><a href="mailto:info@zaichem.com ">info@zaichem.com </a></div>
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

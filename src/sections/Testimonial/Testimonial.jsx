import React from 'react';
import "./Testimonial.css";
import img1 from "../../assets/images/resource/testimonial-thumb.jpg";

export default function Testimonial({ theme }) {
  const reviews = [
    {
      name: "Monika Morala",
      designation: "CEO",
      img: img1,
      text: "Manufactoriuring industry became a key sector of production and labour in European and North American countries during the Industrial Revolution, upsetting previous mercantile and feudal economies.",
    },
  ];
  return (
    <section className={theme === "two" ? "testimonial-section theme-two" : "testimonial-section"}>
      {theme !== "two" && <div className="layer-image"></div>}
      {theme !== "two" &&
        <div className="auto-container clearfix">
          <div className="testimonial-outer">
            <div className="sec-title">
              <span className="title">Testimonial</span>
              <h2>What Our Clients Says</h2>
              <div className="devider"><span className="fa fa-cogs"></span></div>
            </div>
            <div className="testimonial-carousel owl-carousel owl-theme">
              {
                reviews.map((review, i) => {
                  return (
                    <div key={i} className="testimonial-block">
                      <div className="inner-box">
                        <span className="icon fa fa-quote-left"></span>
                        <div className="text">{review.text}</div>
                        <div className="info-box">
                          <div className="thumb"><img src={review.img} alt="" /></div>
                          <h6 className="name">{review.name}</h6>
                          <div className="designation"><span>-</span> {review.designation}</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      }
      {
        theme === "two" &&
        <div className="outer-container">
          <div className="auto-container">
            <div className="row">
              <div className="form-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">You Have any info</span>
                    <h2>Request A Quote</h2>
                    <div className="devider"><span className="fa fa-cogs"></span></div>
                  </div>
                  <div className="request-form">
                    {/* <!--Comment Form--> */}
                    <form method="post" action="">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <input type="text" name="username" placeholder="Name" required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <input type="text" name="phone" placeholder="Phone" required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea name="message" placeholder="Massage"></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <button className="theme-btn btn-style-two" type="submit" name="submit-form">Submit Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="testimonial-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">Testimonial</span>
                    <h2>What Our Clients Says</h2>
                    <div className="devider"><span className="fa fa-cogs"></span></div>
                  </div>
                  <div className="testimonial-carousel owl-carousel owl-theme">
                    {
                      reviews.map((review, i) => {
                        return (
                          <div key={i} className="testimonial-block">
                            <div className="inner-box">
                              <span className="icon fa fa-quote-left"></span>
                              <div className="text">{review.text}</div>
                              <div className="info-box">
                                <div className="thumb"><img src={review.img} alt="" /></div>
                                <h6 className="name">{review.name}</h6>
                                <div className="designation"><span>-</span> {review.designation}</div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  )
}

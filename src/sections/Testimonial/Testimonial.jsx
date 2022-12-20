import React from 'react';
import "./Testimonial.css";
import img1 from "../../assets/images/resource/testimonial-thumb.jpg";

export default function Testimonial() {
  const reviews = [
    {
      name: "Monika Morala",
      designation: "CEO",
      img: img1,
      text: "Manufactoriuring industry became a key sector of production and labour in European and North American countries during the Industrial Revolution, upsetting previous mercantile and feudal economies.",
    },
  ];
  return (
    <section className="testimonial-section">
      <div className="layer-image"></div>
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
    </section>
  )
}

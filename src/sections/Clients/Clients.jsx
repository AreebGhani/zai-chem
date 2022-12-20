import React from 'react';
import "./Clients.css";
import img1 from "../../assets/images/clients/1.png";
import img2 from "../../assets/images/clients/2.png";
import img3 from "../../assets/images/clients/3.png";
import img4 from "../../assets/images/clients/4.png";

export default function Clients() {
    const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];
    return (
        <section className="clients-section">
            <div className="auto-container">
                <div className="sponsors-outer">
                    <ul className="sponsors-carousel owl-carousel owl-theme">
                        {images.map((image, i) => <li className="slide-item"><figure className="image-box"><img src={image.img} alt="" /></figure></li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}

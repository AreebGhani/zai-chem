import React from 'react';
import "./Clients.css";
import Carousel from "react-multi-carousel";
import img1 from "../../assets/images/clients/1.png";
import img2 from "../../assets/images/clients/2.png";
import img3 from "../../assets/images/clients/3.png";
import img4 from "../../assets/images/clients/4.png";

export default function Clients() {
    const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <section className="clients-section">
            <div className="auto-container">
                <div className="sponsors-outer">
                    <ul className="sponsors-carousel owl-carousel owl-theme">
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                        >
                            {images.map((image, i) => <li key={i} className="slide-item"><figure className="image-box"><img src={image.img} alt="" /></figure></li>)}
                        </Carousel>
                    </ul>
                </div>
            </div>
        </section>
    )
}

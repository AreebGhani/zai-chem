import React from 'react';
import GoogleMapReact from 'google-map-react';
import './MapLocation.css';
import img from '../../assets/images/icons/map-marker.png';

export default function MapLocation() {
    const location = {
        center: {
            lat: -37.817085,
            lng: 144.955631
        },
        zoom: 12
    }
    return (
        <section class="contact-map-section">
            <div class="map-outer">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={location.center}
                    defaultZoom={location.zoom}
                >
                    <div lat={-37.817085} lng={144.955631}>
                        Melbourne VIC 3000, Australia<br /><a className="a" href='mailto:info@youremail.com'>info@youremail.com</a>
                        <img src={img} alt="marker" />
                    </div>
                </GoogleMapReact>
            </div>
        </section>
    )
}

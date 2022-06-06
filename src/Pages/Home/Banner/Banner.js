import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import mobile from '../../../images/banner/mobile.png';
import laptop from '../../../images/banner/laptop.png';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel className='container' variant="dark" activeIndex={index} onSelect={handleSelect}>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={mobile}
                    alt="Second slide"
                />
                <div className='carousel-caption'>
                <Carousel.Caption>
                    <h5>From $950</h5>
                    <h2>Vinova SmartPhone</h2>
                    <p>All ‑screen design. Longest battery life ever in an NovaPhone. Fastest performance. Studio‑quality photos.
</p>
                    <button className="banner-btn">About Me</button>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={laptop}
                    alt="Second slide"
                />
                <div className='carousel-caption'>
                <Carousel.Caption>
                    <h5>From $1000</h5>
                    <h2>Mackbook Air</h2>
                    <p>Powerful creativity and productivity tools live inside every Mac — apps that help you explore, connect, and work more efficiently.</p>
                    <button className="banner-btn">About Me</button>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;
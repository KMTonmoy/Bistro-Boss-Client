import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import assets1 from '../../assets/home/01.jpg';
import assets2 from '../../assets/home/02.jpg';
import assets3 from '../../assets/home/03.png';
import assets4 from '../../assets/home/04.jpg';
import assets5 from '../../assets/home/05.png';
import assets6 from '../../assets/home/06.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={assets1} />
                </div>
                <div>
                    <img src={assets2} />
                </div>
                <div>
                    <img src={assets3} />
                </div>
                <div>
                    <img src={assets4} />
                </div>
                <div>
                    <img src={assets5} />
                </div>
                <div>
                    <img src={assets6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
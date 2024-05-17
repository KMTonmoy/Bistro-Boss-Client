import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import FoodCard from '../../Components/FoodCard/FoodCard.jsx';

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };


    const itemsPerSlide = 6;
    const slides = [];


    for (let i = 0; i < items.length; i += itemsPerSlide) {
        slides.push(items.slice(i, i + itemsPerSlide));
    }

    return (
        <div>
            <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
                {slides.map((slideItems, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid md:grid-cols-3 gap-10">
                            {slideItems.map(item => (
                                <FoodCard key={item._id} item={item} />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OrderTab;

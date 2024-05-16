import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Category from './Category/Category';
import PopularMenu from './PopularMenut/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
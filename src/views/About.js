import React from 'react';
// import sections
// import Hero from '../components/sections/Hero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
// import FeaturesSplit from '../components/sections/FeaturesSplit';
// import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

    return (
        <>
            <div className='container'>
                <div className='first'>
                    <div className='text-3xl'>            About Us</div>
                    <br />
                    We  are a group of seasoned industry professionals who are  passionate and diligent, with experience from various sectors spanning through, international trades, Maritime and logistics, with a across  boarder  synergy with major players in both local and foreign market in the e-commerce and E-Logistics ecosystem.
                </div>
            </div>
            <Cta split />
        </>
    );
}

export default Home;
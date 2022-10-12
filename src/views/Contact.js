import React from 'react';
import Cta from '../components/sections/Cta';

const Home = () => {

    return (
        <>
            <div className='container'>
                <div className='first'>
                    <div className='text-3xl'>Contact us</div>
                    <br />
                    AJB Building Kostal road, Anabu II-C Imus Cavite.
                    <br />
                    <br />
                    Email : carrozalogisticsinc@gmail.com
                    <br />
                    <br />
                    Phone 09270668255/09951638603
                </div>
            </div>
            <Cta split />
        </>
    );
}

export default Home;
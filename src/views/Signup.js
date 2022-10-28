import React from 'react';
import IOS from "../assets/ios.png"
import Play from "../assets/google-play.png"

const Signup = () => {
    return (
        <div className='container'>
            <div className=''></div>
            <div className='signup first'>
                <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    <span className="text-color-primary"> Signup as a User </span>
                </h2>
                {/* <div className='reveal-from-left text' data-reveal-delay="250">
                    lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip  ipsum dolor sit amet, consectetur adip
                </div> */}
                <div className='download reveal-from-bottom' data-reveal-delay="250">
                    <a href="https://apps.apple.com/ng/app/carroza/id1629275152" target="blank">
                        <img src={IOS} alt="" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.carrozaapp.user" target="blank">
                        <img src={Play} alt="" />
                    </a>
                </div>
            </div>
            <div className='line'></div>
            <div className='signup'>
                <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    <span className="text-color-primary"> Signup as a Store Owner </span>
                </h2>
                {/* <div className='reveal-from-left text' data-reveal-delay="250">
                    lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip  ipsum dolor sit amet, consectetur adip
                </div> */}
                <div className='download reveal-from-bottom' data-reveal-delay="250">
                    {/* <a href="">
                        <img src={IOS} alt="" />
                    </a> */}
                    <a href="https://play.google.com/store/apps/details?id=com.carrozaapp.store" target="blank">
                        <img src={Play} alt="" />
                    </a>
                </div>
            </div>
            <div className='line'></div>
            <div className='signup'>
                <h2 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                    <span className="text-color-primary"> Signup as a Rider   </span>
                </h2>
                {/* <div className='reveal-from-left text' data-reveal-delay="250">
                    lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip  ipsum dolor sit amet, consectetur adip
                </div> */}
                <div className='download reveal-from-bottom' data-reveal-delay="250">
                    {/* <a href="">
                        <img src={IOS} alt="" />
                    </a> */}
                    <a href="https://play.google.com/store/apps/details?id=com.carrozaapp.driver" target="blank">
                        <img src={Play} alt="" />
                    </a>
                </div>
            </div>
            <div className='line'></div>
        </div>
    );
};

export default Signup;
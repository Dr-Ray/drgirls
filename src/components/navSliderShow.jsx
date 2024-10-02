import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NavSliderShow = ({setReg}) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <>
            <div className="w-700">
                <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} slidesToShow={1}>
                    <div className='h-450 relative w-700' style={{ overflow: 'hidden'}}>
                        <div className='marquee w-full centered absolute mt-2' style={{ height: "60px", zIndex: 1 }}>
                            <marquee>
                                <h1 className='text-white'>Best Dream life meet our Avatars</h1>
                            </marquee>
                        </div>
                        <img src='/images/background-primiere.jpg' className='absolute h-450 object-cover' alt='' />
                        {/* <img src='/images/girl1.png' className='absolute' alt='' style={{ zIndex: 2, height: '304px', width: 'auto', left: '80px', top: '15px' }} /> */}
                    </div>
                    <div className='h-450 relative w-700' style={{ overflow: 'hidden'}}>
                        <div className='marquee w-full centered absolute mt-2' style={{ height: "60px", zIndex: 1 }}>
                            <marquee>
                                <h1 className='text-white'>Best Dream life meet our Avatars</h1>
                            </marquee>
                        </div>
                        <img src='/images/background-primiere.jpg' className='absolute h-450 object-cover' alt='' />
                        {/* <img src='/images/girl1.png' className='absolute' alt='' style={{ zIndex: 2, height: '220px', width: 'auto', left: '80px', top: '15px' }} /> */}
                    </div>
                    <div className='h-450 relative w-700' style={{ overflow: 'hidden'}}>
                        <div className='marquee centered absolute mt-2 w-full' style={{ height: "60px", zIndex: 1 }}>
                            <marquee>
                                <h1 className='text-white'>Best Dream life meet our Avatars</h1>
                            </marquee>
                        </div>
                        <img src='/images/background-primiere.jpg' className='absolute h-450 object-cover'alt='' />
                        {/* <img src='/images/girl1.png' className='absolute' alt='' style={{ zIndex: 2, height: '220px', width: 'auto', left: '80px', top: '15px' }} /> */}
                    </div>
                    <div className='h-450 relative w-700' style={{ overflow: 'hidden'}}>
                        <div className='marquee w-full centered absolute mt-2' style={{ height: "60px", zIndex: 1 }}>
                            <marquee>
                                <h1 className='text-white'>Best Dream life meet our Avatars</h1>
                            </marquee>
                        </div>
                        <img src='/images/background-primiere.jpg' className='absolute h-450 object-cover'alt='' />
                        {/* <img src='/images/girl1.png' className='absolute' alt='' style={{ zIndex: 2, height: '220px', width: 'auto', left: '80px', top: '15px' }} /> */}
                    </div>
                </Slider>
            </div>
            <div className='mt-1 mx-auto px-2' style={{ height: "80px", overflow: 'hidden', width:'350px' }}>
                <Slider
                    asNavFor={nav1}
                    ref={slider => (sliderRef2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerPadding="60px"
                    centerMode={true}
                    className="center"
                    arrows={true}
                >
                    <div className="w-14 overflow-auto rounded-full">
                        <img src='/images/hair.png' className="slnav h-14 rounded-full" alt="" />
                    </div>
                    <div className="w-14 overflow-auto rounded-full">
                        <img src='/images/hair.png' className="slnav h-14 rounded-full" alt=""/>
                    </div>
                    <div className="w-14 overflow-auto rounded-full">
                        <img src='/images/hair.png' className="slnav h-14 rounded-full" alt="" />
                    </div>
                    <div className="w-14 overflow-auto rounded-full">
                        <img src='/images/hair.png' className="slnav h-14 rounded-full" alt=""/>
                    </div>
                </Slider>
            </div>
            <div className='centered mt-2' style={{ height: "60px" }}>
                <button className='btn bg-blue-200 w-52 p-2 rounded-lg' onClick={() => setReg(true)}>Choose</button>
            </div>
        </>
    );
}
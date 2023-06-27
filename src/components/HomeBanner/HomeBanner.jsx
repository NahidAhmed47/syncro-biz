import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assests/banner-sub.png'

const HomeBanner = () => {
    return (
        <div style={{background: 'linear-gradient(to bottom, #4b43c5, #385bd5, #2270e2, #0c84ec, #1397f3)', height: '97vh', width: '100%', position: 'relative'}}>
            this is home banner
            <Image src={bannerImg} alt='img' fill={false} className='h-[128px] sm:h-[203px] lg:h-[500px] w-full  absolute bottom-0'></Image>
        </div>
    );
};

export default HomeBanner;
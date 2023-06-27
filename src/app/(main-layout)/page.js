import CounterBg from '@/components/CounterBg/CounterBg';
import HomeAbout from '@/components/HomeAbout/HomeAbout';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import HomeService from '@/components/HomeService/HomeService';
import React from 'react';

const page = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeService></HomeService>
            <HomeAbout></HomeAbout>
            <CounterBg></CounterBg>
            main layout page
        </div>
    );
};

export default page;
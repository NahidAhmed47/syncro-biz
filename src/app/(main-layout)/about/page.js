import CounterBg from '@/components/CounterBg/CounterBg';
import HomeAbout from '@/components/HomeAbout/HomeAbout';
import PageBanner from '@/components/PageBanner/PageBanner';
import Subscribe from '@/components/Subscribe/Subscribe';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageBanner title="About Us" route1="Home" route2="About"></PageBanner>
            <HomeAbout></HomeAbout>
            <CounterBg></CounterBg>
            <Subscribe></Subscribe>
        </div>
    );
};

export default page;
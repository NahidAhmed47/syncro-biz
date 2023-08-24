import CounterBg from '@/components/shared/CounterBg/CounterBg';
import HomeAbout from '@/components/pages/home/HomeAbout/HomeAbout';
import PageBanner from '@/components/shared/PageBanner/PageBanner';
import Subscribe from '@/components/shared/Subscribe/Subscribe';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <PageBanner title="About Us" route1="Home" route2="About"></PageBanner>
            <HomeAbout></HomeAbout>
            <CounterBg></CounterBg>
            <Subscribe></Subscribe>
        </div>
    );
};

export default AboutPage;
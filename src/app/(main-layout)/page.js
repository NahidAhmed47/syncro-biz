import HomeAbout from '@/components/HomeAbout/HomeAbout';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import React from 'react';

const page = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            main layout page
        </div>
    );
};

export default page;
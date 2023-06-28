import PageBanner from '@/components/PageBanner/PageBanner';
import React from 'react';

const page = () => {
    return (
        <div>
            <PageBanner title="Services" route1="Home" route2="Services"></PageBanner>
            This is services page
        </div>
    );
};

export default page;
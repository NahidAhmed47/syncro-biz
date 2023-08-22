import CounterBg from '@/components/shared/CounterBg/CounterBg';
import DataAccordianHome from '@/components/pages/home/DataAccordianHome/DataAccordianHome';
import HomeAbout from '@/components/pages/home/HomeAbout/HomeAbout';
import HomeBanner from '@/components/pages/home/HomeBanner/HomeBanner';
import HomeService from '@/components/pages/home/HomeService/HomeService';
import OurWorkingProcess from '@/components/shared/OurWorkingProcess/OurWorkingProcess';
import Subscribe from '@/components/shared/Subscribe/Subscribe';
import WorkingProcessSection from '@/components/WorkingProcessSection/WorkingProcessSection';
import React from 'react';

const page = () => {
    return (
        <div className='relative'>
            <HomeBanner></HomeBanner>
            <HomeService></HomeService>
            <OurWorkingProcess></OurWorkingProcess>
            <CounterBg></CounterBg>
            <DataAccordianHome></DataAccordianHome>
            <WorkingProcessSection></WorkingProcessSection>
            <HomeAbout></HomeAbout>
            <Subscribe></Subscribe>
        </div>
    );
};

export default page;
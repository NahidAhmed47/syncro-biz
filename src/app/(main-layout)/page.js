import CounterBg from '@/components/CounterBg/CounterBg';
import DataAccordianHome from '@/components/DataAccordianHome/DataAccordianHome';
import HomeAbout from '@/components/HomeAbout/HomeAbout';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import HomeService from '@/components/HomeService/HomeService';
import OurWorkingProcess from '@/components/OurWorkingProcess/OurWorkingProcess';
import WorkingProcessSection from '@/components/WorkingProcessSection/WorkingProcessSection';
import React from 'react';

const page = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <HomeService></HomeService>
            <HomeAbout></HomeAbout>
            <CounterBg></CounterBg>
            <DataAccordianHome></DataAccordianHome>
            <WorkingProcessSection></WorkingProcessSection>
            <OurWorkingProcess></OurWorkingProcess>
        </div>
    );
};

export default page;
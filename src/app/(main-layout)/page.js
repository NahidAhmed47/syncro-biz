import CounterBg from '@/components/CounterBg/CounterBg';
import DataAccordianHome from '@/components/DataAccordianHome/DataAccordianHome';
import HomeAbout from '@/components/HomeAbout/HomeAbout';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import HomeService from '@/components/HomeService/HomeService';
import OurWorkingProcess from '@/components/OurWorkingProcess/OurWorkingProcess';
import RegisterModal from '@/components/RegisterModal/RegisterModal';
import Subscribe from '@/components/Subscribe/Subscribe';
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
            <RegisterModal></RegisterModal>
        </div>
    );
};

export default page;
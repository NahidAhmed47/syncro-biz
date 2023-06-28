import PageBanner from '@/components/PageBanner/PageBanner';
import React from 'react';
import { BsFillGeoAltFill, BsFillEnvelopeFill, BsTelephoneFill } from "react-icons/bs";

const page = () => {
    return (
        <div>
            <PageBanner title="Contract Us" route1="Home" route2="Contract"></PageBanner>
            <div className='section-container grid md:grid-cols-3 gap-4 md:gap-7 lg:gap-10'>
                <div className='h-[200px] w-full bg-white flex flex-col justify-center items-center group' style={{boxShadow: '0 0 11px 3px rgba(0, 0, 0, 0.05)'}}>
                    <div className='p-3 border border-dashed border-primary rounded-full bg-white group-hover:bg-primary duration-500'>
                        <BsFillGeoAltFill className='w-6 h-6 text-primary group-hover:text-white duration-500'></BsFillGeoAltFill>
                    </div>
                    <h1 className='text-2xl font-bold text-neutral mt-3'>Address</h1>
                    <p className='text-gray-400'>32 st Kilda Road, Melbourne VIC, 3004 Australia</p>
                </div>
                <div className='h-[200px] w-full bg-white flex flex-col justify-center items-center group' style={{boxShadow: '0 0 11px 3px rgba(0, 0, 0, 0.05)'}}>
                    <div className='p-3 border border-dashed border-primary rounded-full bg-white group-hover:bg-primary duration-500'>
                        <BsFillEnvelopeFill className='w-6 h-6 text-primary group-hover:text-white duration-500'></BsFillEnvelopeFill>
                    </div>
                    <h1 className='text-2xl font-bold text-neutral mt-3'>Email</h1>
                    <p className='text-gray-400'>nahidahmedsd47@gmail.com</p>
                </div>
                <div className='h-[200px] w-full bg-white flex flex-col justify-center items-center group' style={{boxShadow: '0 0 11px 3px rgba(0, 0, 0, 0.05)'}}>
                    <div className='p-3 border border-dashed border-primary rounded-full bg-white group-hover:bg-primary duration-500'>
                        <BsTelephoneFill className='w-6 h-6 text-primary group-hover:text-white duration-500'></BsTelephoneFill>
                    </div>
                    <h1 className='text-2xl font-bold text-neutral mt-3'>Phone</h1>
                    <p className='text-gray-400'>(+880)1312397286</p>
                </div>
            </div>
        </div>
    );
};

export default page;
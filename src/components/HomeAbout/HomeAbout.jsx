import Image from 'next/image';
import React from 'react';
import aboutImg from '@/assests/about.png'
import { BsCheck2Square } from "react-icons/bs";
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';


const HomeAbout = () => {
    return (
        <div className='section-container grid md:grid-cols-2'>
            <Image alt='about' src={aboutImg} fill={false}></Image>
            <div className='space-y-4 flex flex-col justify-center items-start'>
                <p className='text-primary'>About Us</p>
                <h1 className='text-2xl md:text-4xl font-bold text-black'>Focused on Actionable Insights</h1>
                <p className='text-gray-400 max-w-[560px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <div className='flex items-center gap-2'>
                        <BsCheck2Square className='text-primary w-6 h-6'></BsCheck2Square>
                        <p className='text-gray-700 font-medium text-lg md:text-xl'>Professional Consultancy Service</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsCheck2Square className='text-primary w-6 h-6'></BsCheck2Square>
                        <p className='text-gray-700 font-medium text-lg md:text-xl'>Professional Consultancy Service</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsCheck2Square className='text-primary w-6 h-6'></BsCheck2Square>
                        <p className='text-gray-700 font-medium text-lg md:text-xl'>Professional Consultancy Service</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsCheck2Square className='text-primary w-6 h-6'></BsCheck2Square>
                        <p className='text-gray-700 font-medium text-lg md:text-xl'>Professional Consultancy Service</p>
                    </div>
                <ButtonPrimary>Read More</ButtonPrimary>
            </div>
        </div>
    );
};

export default HomeAbout;
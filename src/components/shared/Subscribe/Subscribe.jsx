import React from 'react';
import subscribeImg from '@/assests/subscribe.png'
import Image from 'next/image';
import ButtonPrimary from '../../singleComponents/ButtonPrimary/ButtonPrimary';

const Subscribe = () => {
    return (
        <div className='section-container bg-[#f6f5fb] grid md:grid-cols-2 rounded p-5 md:p-8 lg:p-10'>
            <div className='flex justify-center items-center'>
                <Image src={subscribeImg} alt="subscribeImg" fill={false}></Image>
            </div>
            <div className='flex items-center'>
                <div className='space-y-4'>
                    <h1 className='text-2xl md:text-3xl text-neutral font-bold '>Subscribe For Our Latest Updates</h1>
                    <p className='text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quae quam et dolore necessitatibus dolores dolor, nam nisi officia quia.</p>
                    <div className='space-y-3'>
                        <input type="email" name="" id="" className='w-full h-12 px-5 rounded-md bg-white outline-none ' placeholder='Enter Your Email' />
                        <ButtonPrimary>Subscribe</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
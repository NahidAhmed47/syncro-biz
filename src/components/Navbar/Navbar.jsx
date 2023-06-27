import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assests/syncro-logo.png'
import Link from 'next/link';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const Navbar = () => {
    return (
        <div className='w-full py-5 md:py-8 absolute top-0 z-10'>
            <div className='max-w-[1480px] mx-auto flex items-center justify-between'>
                <div className='w-fit flex justify-center gap-2 items-center'> 
                    <Image src={bannerImg} alt='logo' fill={false}></Image>
                    <h1 className='text-2xl font-extrabold text-white'>Syncro<span className='text-primary'>Biz</span></h1>
                </div>
                <ul className='flex items-center gap-6 text-lg text-white font-medium'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/contract">Contract</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                </ul>
                <ButtonPrimary>Free Register</ButtonPrimary>
            </div>
        </div>
    );
};

export default Navbar;
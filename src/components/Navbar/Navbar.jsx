import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assests/syncro-logo.png'
import Link from 'next/link';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import NavLink from './NavLink';

const navLinks = [
    {
        path:'/',
        title: 'Home'
    },
    {
        path:'/services',
        title: 'Services'
    },
    {
        path:'/contract',
        title: 'Contract'
    },
    {
        path:'/about',
        title: 'About Us'
    },
] 

const Navbar = () => {
    return (
        <div className='w-full py-5 md:py-8 absolute top-0 z-10'>
            <div className='max-container flex items-center justify-between'>
                <div className='w-fit flex justify-center gap-2 items-center'> 
                    <Image src={bannerImg} alt='logo' fill={false}></Image>
                    <h1 className='text-2xl font-extrabold text-white'>Syncro<span className='text-primary'>Biz</span></h1>
                </div>
                <ul className='flex items-center gap-6 text-lg text-white font-medium'>
                    {
                        navLinks.map(({path, title})=> <li key={path}>
                        <NavLink exact={path === '/'} activeClassName="text-primary font-semibold" href={path}>{title}</NavLink>
                    </li>)
                    }
                </ul>
                <ButtonPrimary>Free Register</ButtonPrimary>
            </div>
        </div>
    );
};

export default Navbar;
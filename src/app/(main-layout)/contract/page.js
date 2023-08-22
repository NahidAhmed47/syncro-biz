import PageBanner from '@/components/shared/PageBanner/PageBanner';
import Image from 'next/image';
import React from 'react';
import { BsFillGeoAltFill, BsFillEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import contractImg from "@/assests/contact.png"
import Subscribe from '@/components/shared/Subscribe/Subscribe';

const page = () => {
    return (
        <div>
            <PageBanner title="Contact Us" route1="Home" route2="Contact"></PageBanner>
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
            <div className='w-full h-fit bg-[#f6f5fb] p-4 md:p-8 md:py-14 my-32'>
                <div className='max-w-[1320px] mx-auto grid md:grid-cols-2'>
                    <div className='flex items-center justify-center'>
                        <Image src={contractImg} alt='contractImg' fill={false}></Image>
                    </div>
                    {/* contact form */}
                    <div className='px-2 md:px-5 '>
                        <form className='space-y-4'>
                            <div className='grid grid-cols-2 gap-4 md:gap-6'>
                                <input type='text' name="name" className='rounded-md h-12 px-3 md:px-4 outline-none text-neutral focus:border focus:border-primary' placeholder='Your Name'></input>
                                <input type='email' name="email" className='rounded-md h-12 px-3 md:px-4 outline-none text-neutral focus:border focus:border-primary' placeholder='Your Email'></input>
                            </div>
                            <div className='grid grid-cols-2 gap-4 md:gap-6'>
                                <input type='text' name="phone" className='rounded-md h-12 px-3 md:px-4 outline-none text-neutral focus:border focus:border-primary' placeholder='Phone'></input>
                                <input type='text' name="subject" className='rounded-md h-12 px-3 md:px-4 outline-none text-neutral focus:border focus:border-primary' placeholder='Subject'></input>
                            </div>
                            <textarea name="message" className='rounded-md h-40 w-full p-3 md:p-4 outline-none text-neutral focus:border focus:border-primary' placeholder='Your Message'></textarea>
                            <button type='submit' className='text-white bg-primary w-full py-3  font-medium hover:text-neutral hover:bg-white border border-primary duration-300'>Submit Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>
        </div>
    );
};

export default page;
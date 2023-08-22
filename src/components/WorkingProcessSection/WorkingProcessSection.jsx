import React from 'react';
import SectionHeader from '../shared/SectionHeader/SectionHeader';
import Image from 'next/image';
import img1 from '@/assests/process-work/1.png'
import img2 from '@/assests/process-work/2.png'
import img3 from '@/assests/process-work/3.png'

const WorkingProcessSection = () => {
    return (
        <div className='section-container pb-24'>
            <SectionHeader subTitle="Your working process" title="How Do You Work"></SectionHeader>
            <div className='grid md:grid-cols-3 gap-y-36 md:gap-y-auto gap-5 md:gap-8 mt-8'>
                <div className='relative group'>
                    <Image src={img1} alt="img1" fill={false}></Image>
                    <div className='absolute -bottom-24 h-[120px] w-2/3 group-hover:w-full left-[16%] group-hover:left-0  bg-white p-4 text-center flex flex-col justify-center items-center group-hover:bg-primary duration-500' style={{boxShadow: '0 5px 40px 0 rgba(0, 0, 0, 0.11)'}}>
                        <h1 className='text-xl font-semibold text-neutral group-hover:text-white duration-500'>Registration & Setup</h1>
                        <p className='text-sm text-gray-400 group-hover:text-white duration-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, numquam!</p>
                    </div>
                </div>
                <div className='relative group'>
                    <Image src={img2} alt="img1" fill={false}></Image>
                    <div className='absolute -bottom-24 h-[120px] w-2/3 group-hover:w-full left-[16%] group-hover:left-0  bg-white p-4 text-center flex flex-col justify-center items-center group-hover:bg-primary duration-500' style={{boxShadow: '0 5px 40px 0 rgba(0, 0, 0, 0.11)'}}>
                        <h1 className='text-xl font-semibold text-neutral group-hover:text-white duration-500'>Daily Update & Analysis</h1>
                        <p className='text-sm text-gray-400 group-hover:text-white duration-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, numquam!</p>
                    </div>
                </div>
                <div className='relative group'>
                    <Image src={img3} alt="img1" fill={false}></Image>
                    <div className='absolute -bottom-24 h-[120px] w-2/3 group-hover:w-full left-[16%] group-hover:left-0  bg-white p-4 text-center flex flex-col justify-center items-center group-hover:bg-primary duration-500' style={{boxShadow: '0 5px 40px 0 rgba(0, 0, 0, 0.11)'}}>
                        <h1 className='text-xl font-semibold text-neutral group-hover:text-white duration-500'>Manage Business</h1>
                        <p className='text-sm text-gray-400 group-hover:text-white duration-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, numquam!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcessSection;
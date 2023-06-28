import OurWorkingProcess from '@/components/OurWorkingProcess/OurWorkingProcess';
import PageBanner from '@/components/PageBanner/PageBanner';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import Subscribe from '@/components/Subscribe/Subscribe';
import React from 'react';
import { FaDatabase, FaCogs, FaCubes, FaDollarSign, FaHandshake, FaRegChartBar } from "react-icons/fa";

const page = () => {
    return (
        <div>
            <PageBanner title="Services" route1="Home" route2="Services"></PageBanner>
            <div className='section-container'>
                <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* single card */}
                    <ServiceCard icon={<FaDatabase className="w-6 h-6 text-primary group-hover:rotate-[360deg] duration-500"></FaDatabase>} title="Data Analysis"></ServiceCard>
                    <ServiceCard icon={<FaCogs className="w-6 h-6 text-primary group-hover:rotate-[360deg] duration-500"></FaCogs>} title="Manage Your Business"></ServiceCard>
                    <ServiceCard icon={<FaHandshake className="w-6 h-6 text-primary group-hover:rotate-[360deg] duration-500"></FaHandshake>} title="Customer Relationships"></ServiceCard>
                    <ServiceCard icon={<FaDollarSign className="w-6 h-6 text-primary group-hover:rotate-[360deg] duration-500"></FaDollarSign>} title="Financial Management"></ServiceCard>
                    <ServiceCard icon={<FaCubes className="w-6 h-6 text-primary group-hover:rotate-[360deg] duration-500"></FaCubes>} title="Inventory Management"></ServiceCard>
                    <ServiceCard icon={<FaRegChartBar className="w-6 h-6 text-primary group-hover:rotate-[360deg] duration-500"></FaRegChartBar>} title="Sales & Orders"></ServiceCard>
                </div>
            </div>
            <OurWorkingProcess></OurWorkingProcess>
            <Subscribe></Subscribe>
        </div>
    );
};

export default page;
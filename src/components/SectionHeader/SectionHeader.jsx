import React from 'react';

const SectionHeader = ({subTitle, title}) => {
    return (
        <div className='w-full text-center mb-12'>
            <p className='text-primary text-lg font-medium'>{subTitle}</p>
            <h1 className='text-2xl md:text-4xl font-bold text-neutral '>{title}</h1>
        </div>
    );
};

export default SectionHeader;
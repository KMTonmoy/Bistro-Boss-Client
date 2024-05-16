import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center mx-auto md:w-4/12 my-10 '>
            <p className='font-inter font-bold  text-[#d99904]   '>---{subHeading}---</p>
            <p className='uppercase font-inter font-bold  border-y-4 text-[40px] text-[#151515]'>{heading}</p>
        </div>
    );
};

export default SectionTitle;
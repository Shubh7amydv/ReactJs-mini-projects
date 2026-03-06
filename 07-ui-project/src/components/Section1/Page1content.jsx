import React from 'react';
import Leftcontent from './Leftcontent';
import RightContent from './RightContent';

const Page1content = () => {
    return (
        <div className='py-10 px-18 h-[90vh] gap-10 flex justify-between items-center bg-amber-800'>
            <Leftcontent />
            <RightContent />
        </div>
    );
};

export default Page1content;
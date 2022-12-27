import React from 'react';
import { BiCheckbox } from 'react-icons/bi';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';
import SingleMail from './SingleMail';
import { MdRefresh } from 'react-icons/md';

const SendBoxContainer = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold mb-2">Sandbox</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <BiCheckbox className='text-xl mr-2' /> <MdRefresh className='text-xl' />
                    </div>
                    <div className='flex items-center'>
                        <span className='text-sm mr-4'>1-50 0f 102</span>
                        <HiOutlineArrowSmLeft className='text-xl mr-2' />
                        <HiOutlineArrowSmRight className='text-xl' />
                    </div>
                </div>
            </div>
            {/* mail message */}
            <SingleMail />
        </div>
    );
};

export default SendBoxContainer;
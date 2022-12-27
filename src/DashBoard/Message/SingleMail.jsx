import React from 'react';
import {
    BiArchiveIn, BiSelectMultiple, BiDotsVerticalRounded, BiCheckboxChecked, BiCheckbox
} from 'react-icons/bi';
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { MdMarkAsUnread, MdRefresh } from 'react-icons/md';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';

const SingleMail = () => {
    return (
        <div className=' mt-2'>
            <div className='bg-gray-200 flex py-2 pl-2 cursor-pointer border-b border-indigo-400
            hover:border-2 relative
            '>
                <div className='w-[250px] mr-10'>
                    <div className='flex items-center'>
                        <BiCheckbox className='text-xl mr-2' />
                        <AiOutlineStar className='text-xl mr-2' />
                        <h3>DianaHost</h3>
                    </div>
                </div>
                <div>
                    <p>Your orders are expiring soon.
                        Renew them now.
                        Some of your orders are expiring soon or have already.....</p>
                </div>
                <div className=''>
                    <div className='absolute flex right-10 bg-gray-200'>
                        <BiArchiveIn className='text-xl mr-4' />
                        <AiOutlineDelete className='text-xl' />
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 flex py-2 pl-2 cursor-pointer border-b border-indigo-400
            hover:border-2 relative
            '>
                <div className='w-[250px] mr-10'>
                    <div className='flex items-center'>
                        <BiCheckbox className='text-xl mr-2' />
                        <AiOutlineStar className='text-xl mr-2' />
                        <h3>DianaHost</h3>
                    </div>
                </div>
                <div>
                    <p>Your orders are expiring soon.
                        Renew them now.
                        Some of your orders are expiring soon or have already.....</p>
                </div>
                <div className=''>
                    <div className='absolute flex right-10 bg-gray-200'>
                        <BiArchiveIn className='text-xl mr-4' />
                        <AiOutlineDelete className='text-xl' />
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 flex py-2 pl-2 cursor-pointer border-b border-indigo-400
            hover:border-2 relative
            '>
                <div className='w-[250px] mr-10'>
                    <div className='flex items-center'>
                        <BiCheckbox className='text-xl mr-2' />
                        <AiOutlineStar className='text-xl mr-2' />
                        <h3>DianaHost</h3>
                    </div>
                </div>
                <div>
                    <p>Your orders are expiring soon.
                        Renew them now.
                        Some of your orders are expiring soon or have already.....</p>
                </div>
                <div className=''>
                    <div className='absolute flex right-10 bg-gray-200'>
                        <BiArchiveIn className='text-xl mr-4' />
                        <AiOutlineDelete className='text-xl' />
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 flex py-2 pl-2 cursor-pointer border-b border-indigo-400
            hover:border-2 relative
            '>
                <div className='w-[250px] mr-10'>
                    <div className='flex items-center'>
                        <BiCheckbox className='text-xl mr-2' />
                        <AiOutlineStar className='text-xl mr-2' />
                        <h3>DianaHost</h3>
                    </div>
                </div>
                <div>
                    <p>Your orders are expiring soon.
                        Renew them now.
                        Some of your orders are expiring soon or have already.....</p>
                </div>
                <div className=''>
                    <div className='absolute flex right-10 bg-gray-200'>
                        <BiArchiveIn className='text-xl mr-4' />
                        <AiOutlineDelete className='text-xl' />
                    </div>
                </div>
            </div>

            <div className='bg-gray-200 flex py-2 pl-2 cursor-pointer border-b border-indigo-400
            hover:border-2 relative
            '>
                <div className='w-[250px] mr-10'>
                    <div className='flex items-center'>
                        <BiCheckbox className='text-xl mr-2' />
                        <AiOutlineStar className='text-xl mr-2' />
                        <h3>DianaHost</h3>
                    </div>
                </div>
                <div>
                    <p>Your orders are expiring soon.
                        Renew them now.
                        Some of your orders are expiring soon or have already.....</p>
                </div>
                <div className=''>
                    <div className='absolute flex right-10 bg-gray-200'>
                        <BiArchiveIn className='text-xl mr-4' />
                        <AiOutlineDelete className='text-xl' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMail;
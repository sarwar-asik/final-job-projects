import React from 'react';
import {
    BiArchiveIn, BiSelectMultiple, BiDotsVerticalRounded, BiCheckboxChecked, BiCheckbox
} from 'react-icons/bi';
import { AiOutlineStar, AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import { MdMarkAsUnread, MdRefresh } from 'react-icons/md';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';
import SingleMail from './SingleMail';


const InboxContainer = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold mb-2">Inbox</h1>
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

export default InboxContainer;
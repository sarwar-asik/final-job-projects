import React from 'react';
import { FaPen } from 'react-icons/fa';
import { IoIosAdd } from 'react-icons/io';

const Language = () => {
    return (
        <div className='my-3 p-8'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-3xl '>Language</h1>
                    <div className='flex'>
                        <p className='text-4xl ml-4 mt-2'><IoIosAdd /></p>
                        <p className='text-2xl ml-4 mt-3'><FaPen /></p>
                    </div>
                </div>
            </div>
            <div className='my-4'>
                <p className='text-xl'>Bangla</p>
                <p className='text-xl'>English</p>
                <p className='text-xl'>Hindi</p>
            </div>
        </div>
    );
};

export default Language;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobsDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='bg-base-200 text-black'>
           <h1>hello world</h1>
        </div>
    );
};

export default JobsDetails;
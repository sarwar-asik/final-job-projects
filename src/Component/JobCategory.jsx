import React, { useEffect, useState } from 'react';

const JobCategory = () => {
    const [jobCategory, setJobCategory] = useState([])
    useEffect(() => {
        fetch('JobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <div
           className='py-10 w-11/12 mx-auto '>
            <div>
                <h2 className='text-2xl py-10 text-center font-bold md:text-4xl '>Choice your Favorite Job</h2>
            </div>
            <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                {
                    jobCategory.map(job => <div style={{
                        backgroundColor: '#16a085',
                      }} className='bg-slate-900 p-3 rounded-md' key={job.id}>
                        <div className='flex flex-col md:flex-row  items-center min-w-[150px]'>
                            <img className='w-12 mr-3' src={job.img} alt="" />
                            <p className='text-xl text-white '>{job.job_title}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
        </div>
    );
};

export default JobCategory;
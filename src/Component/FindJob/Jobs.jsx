import React, { useState } from 'react';
import img from '../../asset/11.jpg';

const Jobs = ({ allJobs, setSearch }) => {

    const [searchValue, setSearchValue] = useState('all');
    const handleToChange = (event) => {
        const ser = event.target.value;
        setSearchValue(ser)
    }
    const submitButton = () => {
        setSearch(searchValue)
    }

    return (
        <div className='w-11/12 mx-auto '>
            <div className='pt-10'>
                <div className="flex items-center mb-3">
                    <input onChange={handleToChange} type="text" class="w-full py-1 px-3 border border-cyan-500 focus:outline-green-500 bg-blue-200 rounded" placeholder="Find your Interested jobs" />
                    <button onClick={submitButton} className="btn btn-primary btn-sm rounded ml-[-78px]">Search</button>
                </div>
            </div>

            <div>
                <div>
                    <div className='w-full mb-7 h-12 rounded-sm flex justify-center items-center bg-slate-400'>
                        <h2 className='text-xl font-bold'>{allJobs.length} Jobs are open Your for Candidate</h2>
                    </div>
                    <div className="mb-5">
                        {
                            allJobs.map(jobs =>
                                <div
                                    key={jobs._id}
                                    className="border border-blue-500 shadow-md shadow-slate-900 p-5 mb-5 rounded-md">
                                    <div className="flex justify-between">
                                        <div className="flex items-center">
                                            <img src={img} className="w-16 h-16 rounded-full mr-5" alt="noimage" />
                                            <div>
                                                <h2 className="text-2xl font-bold">{jobs.job_details.job.job_title}</h2>
                                                <h5 className="">{jobs.job_details.job.jobType} - {jobs.job_details.experience}</h5>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mr-5">
                                            <h5 className="text-xl">{jobs.pay.currency} {jobs.pay.payment}</h5>
                                            <h5 className="">{jobs.pay.pay_duration}</h5>
                                        </div>
                                    </div>
                                    <p className="ml-16 text-justify p-4">
                                        {jobs.job_description.slice(0, 200)}
                                    </p>
                                    <div className="flex justify-center">
                                        <div className='flex'>
                                            {
                                                jobs.required_skilled?.map((skill, i) => <h5 key={i} className="rounded-md bg-emerald-300 p-2 mr-3">{skill}</h5>)
                                            }
                                        </div>
                                    </div>
                                </div>

                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
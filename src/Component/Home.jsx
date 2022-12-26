import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../asset/bg.jpg';
import PrimaryButton from './Button/PrimaryButton';
import Contact from './Contact/Contact';
import HiringCompany from './HiringCompany';
import JobCategory from './JobCategory';
import Login from './Login/Login';

const Home = () => {
    return (
        <div>
            {/* this is banner */}
            <div className=" min-h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${img2})` }}>
                <div className="flex md:justify-end md:mr-40 md:pt-10 justify-center">
                    <div>
                        <h1 className="text-5xl text-orange-500 font-bold">Find Your Job</h1>
                        <p className="py-6 text-orange-500 w-[350px]">Find full or part-time jobs in England, Scotland and Wales.
                            Use the ‘Find a job’ service to search and apply for jobs.
                            This service has replaced Universal Jobmatch.</p>
                        <Link to={'/contact'}> <PrimaryButton>Contact US</PrimaryButton></Link>
                    </div>
                </div>
            </div>
            {/* this is job category */}
            <JobCategory />
            {/* this is company category */}
            <HiringCompany />

            {/* Learn sections  */}
            <div className='my-16 p-5 bg-slate-900 rounded-lg w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex justify-center items-center'>
                        <img src="https://static.naukimg.com/s/0/0/i/ff-services.png" alt="" />
                    </div>
                    <div className='md:ml-[-150px] text-orange-500'>
                        <h3 className='text-2xl font-bold'>Accelerate your job search with premium services</h3>
                        <p className='my-4'>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</p>
                        <div className='flex flex-col gap-3 md:flex-row'>
                            <p className='btn btn-outline text-orange-500 mr-3'>Resume writing</p>
                            <p className='btn btn-outline text-orange-500 mr-3'>Priority applicant</p>
                            <p className='btn btn-outline text-orange-500 mr-3'>Resume display</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <PrimaryButton className='btn'>Learn More</PrimaryButton>
                        <p className='text-orange-500'>
                            Learn more
                            Includes paid services
                        </p>
                    </div>
                </div>
            </div>

            {/* this is login */}
            <Login />
            {/* this is contact */}
            <Contact />
        </div>
    );
};

export default Home;
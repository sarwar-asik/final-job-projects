import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../asset/bg.jpg';
import PrimaryButton from './Button/PrimaryButton';
import CartOption from './CartOption';
import Contact from './Contact/Contact';
import HiringCompany from './HiringCompany';
import JobCategory from './JobCategory';
import Login from './Login/Login';
import Other from './Other';
import PricingPlan from './PricingPlan/PricingPlan';

const Home = () => {
    return (
        <div>
            {/* this is banner */}
            <div
            style={{
                backgroundColor: '#16a085',
              }}
            className="hero p-16 mt-5 rounded-xl text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img2} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">VlaunChu Jobs !</h1>
                    <p className="py-6">We are looking for mission-oriented candidates who are passionate about global health. Looking for skilled professionals to help advance our life-saving mission. Trusted information. Fact-based content. Highlights: Donation Option Available, Newsletter Available.</p>
            <div className="form-control">
             <div className="input-group">
             <input type="text" placeholder="Job title,keywords..." className="input input-bordered text-black" />
                <button className="btn btn-square ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
               </div>
                </div>
            </div>
        </div>
        
        <Other></Other>
             
        <CartOption></CartOption>
            {/* this is job category */}
            <JobCategory />
            {/* this is company category */}
            <HiringCompany />

            {/* Pricing Plan */}
            <PricingPlan />
            {/* Learn sections  */}
            <div
            style={{
                backgroundColor: '#16a085',
              }}
            className='my-16 p-5 bg-slate-900 rounded-lg w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex justify-center items-center'>
                        <img src="https://static.naukimg.com/s/0/0/i/ff-services.png" alt="" />
                    </div>
                    <div className='md:ml-[-150px] text-white'>
                        <h3 className='text-2xl font-bold'>Accelerate your job search with premium services</h3>
                        <p className='my-4'>Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!</p>
                        <div className='flex flex-col gap-3 md:flex-row'>
                            <p className='btn btn-outline text-white mr-3'>Resume writing</p>
                            <p className='btn btn-outline text-white mr-3'>Priority applicant</p>
                            <p className='btn btn-outline text-white mr-3'>Resume display</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                    <button className="btn w-[150px] btn-primary">Learn More</button>
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
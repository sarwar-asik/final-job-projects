import React from 'react';
import { FaRegCheckCircle, FaTimes } from "react-icons/fa";

const PricingPlan = () => {
    return (
        <div className='container mx-auto'>
            <div
        className='px-2 py-10 w-3/4 mx-auto'>
            <h1 className="text-4xl  font-bold text-center my-5">Our Pricing Plan</h1>
            <div className='grid mt-16 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white '>
                <div
                style={{
                    backgroundColor: '#16a085',
                  }}
                className=' p-6 rounded-lg'>
                    <div>
                        <h2 className="text-2xl font-extrabold">Basic</h2>
                        <p>Most popular</p>
                    </div>
                    <div className='text-center my-4'>
                        <h1><span className='text-6xl font-bold '>$2.44</span> <span>/month</span> </h1>
                    <div className='p-6'>
                         <button className="btn btn-outline btn-warning p-4">Choose Plan</button>
                    </div>
                    </div>
                    <div className='text-center'>
                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>unlimited products</small></p>

                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>custom permissions</small></p>

                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>custom infrastructure</small></p>

                        <p className='flex gap-2 mb-2'> <FaTimes /> <small>custom design and features</small></p>

                        <p className='flex gap-2 mb-2'> <FaTimes /> <small>unlimited updates</small></p>

                        <p className='flex gap-2 mb-2'> <FaTimes /> <small>unlimited infrastructure</small></p>
                    </div>
                </div>
                <div style={{
              backgroundColor: '#16a085',
             }} className=' p-10 rounded-lg'>
                    <div>
                        <h2 className="text-2xl font-extrabold">Medium</h2>
                        <p>Recommended</p>
                    </div>
                    <div className='text-center my-4'>
                        <h1><span className='text-6xl font-bold '>$4.99</span> <span>/month</span> </h1>
                        <div className='p-6'>
                         <button className="btn btn-outline btn-warning p-4">Choose Plan</button>
                    </div>
                    </div>
                    <div className='text-center'>
                        <p className='flex text-xl gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>unlimited products</small></p>

                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>custom permissions</small></p>

                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>custom infrastructure</small></p>

                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>custom design and features</small></p>

                        <p className='flex gap-2 mb-2'> <FaTimes /> <small>unlimited updates</small></p>

                        <p className='flex gap-2 mb-2'> <FaTimes  /> <small>unlimited infrastructure</small></p>
                    </div>
                </div>
                <div
                style={{
                    backgroundColor: '#16a085',
                  }} 
                 className=' p-10 rounded-lg'>
                    <div>
                        <h2 className="text-2xl font-extrabold">Enterprise</h2>
                        <p>Advanced</p>
                    </div>
                    <div className='text-center my-4'>
                        <h1><span className='text-6xl font-bold '>$10.99</span> <span>/month</span> </h1>
                        <div className='p-6'>
                         <button className="btn btn-outline btn-warning p-4">Choose Plan</button>
                    </div>
                    </div>
                    <div className='text-center'>
                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>unlimited products</small></p>

                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>custom permissions</small></p>

                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>custom infrastructure</small></p>

                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>custom design and features</small></p>

                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle className='bg-green-600 rounded-full' /> <small>unlimited updates</small></p>

                        <p className='flex gap-2 mb-2'> <FaRegCheckCircle  className='bg-green-600 rounded-full'/> <small>unlimited infrastructure</small></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PricingPlan;
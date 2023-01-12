import React from 'react';
import { FaRegCheckCircle, FaTimes } from "react-icons/fa";

const PricingPlan = () => {
    return (
        <div className='px-20 bg-gray-900 py-10'>
            <h1 className="text-4xl text-white font-bold text-center my-5">Our Pricing Plan</h1>
            <div className='grid grid-cols-3 gap-10  text-white '>
                <div className='bg-gray-800 p-10 rounded-lg'>
                    <div>
                        <h2 className="text-2xl font-extrabold">Basic</h2>
                        <p>Most popular</p>
                    </div>
                    <div className='text-center my-4'>
                        <h1><span className='text-6xl font-bold '>$2.44</span> <span>/month</span> </h1>
                        <button className='btn btn-primary my-2'>Choose Plan</button>
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
                <div className='bg-gray-800 p-10 rounded-lg'>
                    <div>
                        <h2 className="text-2xl font-extrabold">Medium</h2>
                        <p>Recommended</p>
                    </div>
                    <div className='text-center my-4'>
                        <h1><span className='text-6xl font-bold '>$4.99</span> <span>/month</span> </h1>
                        <button className='btn btn-primary my-2'>Choose Plan</button>
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
                <div className='bg-gray-800 p-10 rounded-lg'>
                    <div>
                        <h2 className="text-2xl font-extrabold">Enterprise</h2>
                        <p>Advanced</p>
                    </div>
                    <div className='text-center my-4'>
                        <h1><span className='text-6xl font-bold '>$10.99</span> <span>/month</span> </h1>
                        <button className='btn btn-primary my-2'>Choose Plan</button>
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
    );
};

export default PricingPlan;
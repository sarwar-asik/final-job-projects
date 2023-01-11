import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";

const JobsDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className=' p-6 text-white'>
         <div>
         <div className="flex flex-col justify-center p-6 shadow-md w-full rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	    <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.1.1908891225.1665030381&semt=sph" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	     <div className="space-y-4 text-center divide-y divide-gray-700">
		 <div className='text-start mt-3'>
            <h1 className='text-3xl'>Purvi Tanvi</h1>
            <p>HR Manager</p>
            <p>Bengaluru, Karnataka, India  Contact info</p>
            <p>500+ connections</p>
          <div className="rating py-4">
         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
         <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
           </div>
         </div>
         <div className='flex gap-2 pt-2'>
            <button className='btn btn-outline rounded-2xl text-white'><FaLock className='mr-2'/> Message</button>
            <button className='btn btn-outline rounded-2xl text-white'><BiTimeFive className='mr-2 text-xl'/> Pending</button>
            <button className='btn btn-outline rounded-2xl text-white'><CiCircleMore className='mr-2 text-xl'/>More</button>
         </div>
         <div className='text-start pt-4 bg-slate-600 rounded-xl p-6 text-white'>
            <h1 >Hiring Front End Developer</h1>
            <p>OptimHire · Mumbai, Maharashtra, India (On-site) · 3 minutes ago</p>
            <Link className='text-blue-400 hover:text-purple-400' href="">View Job</Link> 
         </div>
	    </div>
         </div>
         </div>
        </div>
    );
};

export default JobsDetails;
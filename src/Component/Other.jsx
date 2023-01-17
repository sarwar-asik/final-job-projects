import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../asset/Screenshot.png';

const Other = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-16'>
            <div className='text-center'>
               <h2 className='text-3xl font-semibold'>Welcome Plan Absolutely Free for the new Employers</h2>
               <p className='my-6'>Enter the coupon code mentioned below during the checkout to get 100% off on the Welcome Plan worth Rs.1499/-</p>
            </div>
            <div className='flex justify-center'>
                <img src={img2} alt="" />
            </div>
                <Link className='flex mt-4 justify-center' to={'/login'}>
                    <button className="btn text-white btn-outline w-[200px] bg-green-600 rounded-lg">Sign-Up Now</button>
                </Link>
        </div>
        </div>
    );
};

export default Other;
import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className="flex w-full flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">

                <img className=' h-[350px] rounded-xl' src="https://media.licdn.com/dms/image/D5616AQFjgp01aXzyqg/profile-displaybackgroundimage-shrink_350_1400/0/1673033329766?e=1679529600&v=beta&t=KG2YJAV1QYBS-8jBjaFkWRo3S6jn2YT7HRRnZIYPevM" alt="" />
                <div className='-mt-10'>
                    <img src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=1380&t=st=1673855900~exp=1673856500~hmac=4409761ee3d146bbe92f687597b186d3db168396d25824412a999d39e2f52e62" alt="" className="w-36 h-36  rounded-full dark:bg-gray-500 aspect-square" />
                </div>
                <div className="space-y-4  divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-3xl font-semibold">Tom Crus</h2>
                        <p className="text-xl">Front End Developer</p>
                        <p>Talks about #react, #nodejs, #firebase, #javascript, and #tailwindcss</p>
                        <p>Manikganj Sadar Upazila, Dhaka, Bangladesh <span className='text-blue-400'> Contact info</span></p>
                        <p className='text-blue-400'>https://storied-panda-805346.netlify.app/</p>
                        <p className='text-blue-400'>243 followers <span>243 connections</span> </p>
                    </div>
                    <div className='mt-3'>
                        <button className="btn  bg-blue-400 rounded-2xl hover:text-white text-black">open to</button>
                        <button className="btn ml-2 border-blue-400 rounded-2xl text-white btn-outline">add profile section</button>
                        <button className="btn ml-2 text-white dark:bg-gray-900">more</button>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;
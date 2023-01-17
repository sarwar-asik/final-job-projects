import React from 'react';
import { FaPen } from 'react-icons/fa';
import { IoIosAdd } from "react-icons/io";

const Skill = () => {
    return (
        <div className='p-8 mt-3 bg-base-content'>
            <div className='flex justify-between'>
                <h1 className='text-3xl '>Skills</h1>
                <div className='flex'>
                    <button className='btn ml-2 border-blue-400 rounded-2xl text-white btn-outline'>demonstrate skill</button>
                    <p className='text-4xl ml-4 mt-2'><IoIosAdd /></p>
                    <p className='text-2xl ml-4 mt-2'><FaPen /></p>
                </div>
            </div>
            <div>
                <div>
                    <p className='text-xl mt-3'>Css</p>
                    <p className='my-3'>NextJS with MySQL at Ntech Global Solutions</p>
                    <button className='btn  border-blue-400 rounded-2xl text-white btn-outline'>Endorse</button>
                </div>
                <div>
                    <p className='text-xl mt-3'>JavaScript</p>
                    <p className='my-3'> 2 experiences across LetsGrowMore and 1 other company</p>
                    <button className='btn  border-blue-400 rounded-2xl text-white btn-outline'>Endorse</button>
                </div>
                <div>
                    <p className='text-xl mt-3'>ReactJS</p>
                    <p className='my-3'>Full stack web developer at Hydrogenworlds</p>
                    <button className='btn  border-blue-400 rounded-2xl text-white btn-outline'>Endorse</button>
                </div>
            </div>
        </div>
    );
};

export default Skill;
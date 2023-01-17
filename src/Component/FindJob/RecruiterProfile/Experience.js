import React from 'react';
import img from '../../../assets/experience/Screenshot.png'
import img1 from '../../../assets/experience/Screenshot (1).png'
import img2 from '../../../assets/experience/Screenshot (2).png'
import img3 from '../../../assets/experience/Screenshot (3).png'

const Experience = () => {
    return (
        <div className='p-8 bg-base-content mt-3'>
            <h2 className='text-3xl my-3'>Experience</h2>
            <div className='flex mt-2'>
                <div className="avatar">
                    <div className="w-16 h-16 rounded">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div className='ml-2'>
                    <p className='text-xl'>Business Development Executive</p>
                    <p>Yougetplaced · Full-time</p>
                    <p className='text-xs mt-1'>Dec 2022 - Present · 2 mos</p>
                    <p className='my-2'>India · Remote</p>
                </div>
            </div>
            <div className='flex mt-2'>
                <div className="avatar">
                    <div className="w-16 h-16 rounded">
                        <img src={img1} alt='' />
                    </div>
                </div>
                <div className='ml-2'>
                    <p className='text-xl'>Full stack web developer</p>
                    <p>Hydrogenworlds · Internship</p>
                    <p className='text-xs mt-1'>Sep 2022 - Present · 5 mos</p>
                    <p className='my-2'>Skills: React.js · Node.js · MongoDB · HTML5 · Cascading Style Sheets (CSS) · BootstrapSkills</p>
                </div>
            </div>
            <div className='flex mt-2'>
                <div className="avatar">
                    <div className="w-16 h-16 rounded">
                        <img src={img2} alt='' />
                    </div>
                </div>
                <div className='ml-2'>
                    <p className='text-xl'>Web Development Intern</p>
                    <p>LetsGrowMore · Internship</p>
                    <p className='text-xs mt-1'>May 2022 - Dec 2022 · 8 mos</p>
                    <p className='my-2'>Skills: JavaScript · HTML5 · Cascading Style Sheets (CSS) · Bootstrap</p>
                </div>
            </div>
            <div className='flex mt-2'>
                <div className="avatar">
                    <div className="w-16 h-16 rounded">
                        <img src={img3} alt='' />
                    </div>
                </div>
                <div className='ml-2'>
                    <p className='text-xl'>PHP with MySQL</p>
                    <p>Ntech Global Solutions · Internship</p>
                    <p className='text-xs mt-1'>Feb 2019 · 1 mo</p>
                    <p className='my-2'>Skills: Css · JavaScript · HTML5 · Bootstrap</p>
                </div>
            </div>

        </div>
    );
};

export default Experience;
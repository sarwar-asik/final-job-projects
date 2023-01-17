import React from 'react';
import About from './About';
import Experience from './Experience';
import Featured from './Featured';
import Language from './Language';
import Profile from './Profile';
import Skill from './Skill';

const AllProfile = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-gray-100'>
            <Profile></Profile>
            <Featured></Featured>
            <About></About>
            <Experience></Experience>
            <Skill></Skill>
            <Language></Language>
        </div>
    );
};

export default AllProfile;
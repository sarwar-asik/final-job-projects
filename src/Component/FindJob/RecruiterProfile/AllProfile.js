import React from 'react';
import Featured from './Featured';
import Profile from './Profile';

const AllProfile = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-gray-100'>
            <Profile></Profile>
            <Featured></Featured>
        </div>
    );
};

export default AllProfile;
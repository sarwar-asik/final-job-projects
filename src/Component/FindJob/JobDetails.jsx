import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>Hello details</h2>
        </div>
    );
};

export default JobDetails;
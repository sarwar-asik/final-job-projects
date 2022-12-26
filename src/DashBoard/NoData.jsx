import React from 'react';

const NoData = ({ children }) => {
    return (
        <div className=' mx-auto h-96  flex items-center justify-center rounded-xl bg-base-200'>
            <div className="text-6xl text-center">{children}</div>
        </div>
    );
};

export default NoData;
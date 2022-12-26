import React from 'react';

const SpinnerPage = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <label className="swap swap-flip text-9xl mb-10">
                <input type="checkbox" />

                <div className="swap-on">😈</div>
                <div className="swap-off">😇</div>
            </label>
            <button className="btn btn-info loading">Please Waiting</button>
        </div>
    );
};

export default SpinnerPage;
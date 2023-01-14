import React, { useEffect, useState } from 'react';

const HiringCompany = () => {
    const [companis, setCompanis] = useState([])


    console.log(companis);
    useEffect(() => {
        fetch('companis.json')
            .then(res => res.json())
            .then(data => setCompanis(data))
    }, [])
    return (
        <div
        
        className='py-10 w-11/12 mx-auto'>
            <div>
                <h2 className='text-2xl py-10 text-center font-bold md:text-4xl text-white'>Top companies hiring now</h2>
            </div>
            {/* categories */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    companis.map(company => <div style={{
                        backgroundColor: '#16a085',
                      }}  className='text-black  p-6 rounded-lg' key={company.id}>
                        <img className='w-full rounded-md' src={company.img} alt="" />
                        <p className='text-3xl text-center mt-2 font-bold text-white'>{company.company_name}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HiringCompany;
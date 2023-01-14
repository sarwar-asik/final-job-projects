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
        <div className='container mx-auto'>
            <div
        
        className='py-10 w-11/12 mx-auto'>
          <div>
              <h2 className='text-2xl py-10 text-center font-bold md:text-4xl '>Top companies hiring now</h2>
          </div>
          {/* categories */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
              {
                  companis.map(company => 
                  <div
                  key={company.id}
                  className="card card-compact p-6 bg-base-100 shadow-2xl">
                     <figure className='p-3'><img src={company.img} alt="Shoes" /></figure>
                         <div className="card-body">
                        <p className='text-xl my-3 text-center mt-2 font-bold '>{company.company_name}</p>
                          <div className="card-actions justify-end">
                      </div>
                     </div>
                 </div>
                  )
              }
          </div>
      </div>
        </div>
    );
};

export default HiringCompany;
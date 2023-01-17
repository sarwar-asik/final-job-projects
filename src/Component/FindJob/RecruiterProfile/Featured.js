import React from 'react';

const Featured = () => {
    return (
        <div className=''>
            <h1 className='text-3xl font-semibold my-4 ml-10'>Featured</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                <div className="card w-full bg-base-content shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://media.licdn.com/dms/image/sync/C5627AQFCXdZpVV28aw/articleshare-shrink_480/0/1673340940751?e=1674460800&v=beta&t=sDDmUrHOhfdHULAyyVkIdadFdaGmEfwSR1075FiOgPw" alt="Shoes" className="rounded-xl h-[250px]" />
                    </figure>
                    <div className=" text-center">
                        <p className='my-2'> Tom-front-end-resume.pdf</p>
                        <p className='text-xs my-2'>Google Docs</p>
                    </div>
                </div>
                <div className="card w-full bg-base-content shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.freepik.com/premium-psd/website-mockup_68185-1126.jpg?size=626&ext=jpg&uid=R83218281&ga=GA1.1.1908891225.1665030381&semt=ais" alt="Shoes" className="rounded-xl h-[250px]" />
                    </figure>
                    <div className=" text-center">
                        <p className='my-2'>MY-PORTFOLIO</p>
                        <p className='text-xs my-2'>storied-panda-805346.netlify.app</p>
                    </div>
                </div>
                <div className="card w-full bg-base-content shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://avatars.githubusercontent.com/u/53802153?v=4" alt="Shoes" className="rounded-xl h-[250px]" />
                    </figure>
                    <div className=" text-center">
                        <p className='my-2'>tanvirrifat1 - Overview</p>
                        <p className='text-xs my-2'>Git-Hub</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Featured;
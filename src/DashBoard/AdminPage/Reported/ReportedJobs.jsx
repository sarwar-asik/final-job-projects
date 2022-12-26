import React from 'react';
import PrimaryButton from '../../../Component/Button/PrimaryButton';
import NoData from '../../NoData';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Component/Spinner/Spinner';
import { useTitle } from 'react-use';
import { ServerApi } from '../../../AllApi/MainApi';

const ReportedJobs = () => {
    useTitle('Admin Dashboard - Reported Candidate')
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch(`${ServerApi}/allSeller`);
                const data = await res.json();

                return data
            }
            catch (err) { }
        }
    })
    if (isLoading) {
        <Spinner />
    }
    console.log(users);
    return (
        <div className='w-11/12 mx-auto'>
            {users?.length > 0 ?
                <>
                    <div className='my-5'>
                        <h3 className="text-4xl font-bold text-center">Reported Jobs</h3>
                        <p className='text-xl font-bold text-center'>Total: 04</p>
                    </div>
                    <div>
                        {
                            users.map(user =>
                                <div className='grid grid-cols-1' key={user._id}>
                                    <div className='w-full p-5 rounded-md mb-4 bg-blue-200 grid grid-cols-3'>
                                        <div>
                                            <h4 className='text-xl font-bold'>Job Title: <span className='text-green-700'>Web Developer</span></h4>
                                            <h4 className='text-xl'>Recruiter Name: <span className='text-green-700 font-bold'>{user.name}</span></h4>
                                            <p>Email: {user.email}</p>
                                        </div>
                                        <div>
                                            <p className='text-lg font-semibold'>Reported By : <span className='text-yellow-500'>Sadin Ali</span></p>
                                            <p className='text-lg font-semibold'>Category : <span className='text-red-800'>Violence</span></p>
                                            <p className='text-lg font-semibold'>Job Id : <span className='text-red-800'>#1232222</span></p>
                                        </div>
                                        <div>
                                            <select className="select bg-red-400 text-white select-bordered">
                                                <option disabled selected>Action</option>
                                                <option>Sand Warning</option>
                                                <option>Suspension</option>
                                                <option>Restricted</option>
                                                <option>Remove Jobs</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </>
                :
                <div className='my-5'>
                    <NoData>USER NOT FOUND</NoData>
                </div>
            }
        </div>
    );
};

export default ReportedJobs;
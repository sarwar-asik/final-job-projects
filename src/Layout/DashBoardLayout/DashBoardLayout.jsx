import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';
import NavBer from '../../Component/Navber';
import Spinner from '../../Component/Spinner/Spinner';
import { AuthContext } from '../../ContextApi/AuthProvider/AuthProvider';
import useUserType from '../../Hooks/DashBoardUserType/DashBoardUserType';

const DashBoardLayout = () => {
    const { user, LogOut } = useContext(AuthContext);
    // console.log(user)
    const [isAdmin, isRecruiter, isCandidate, userLoading] = useUserType(user?.email)
    const navigate = useNavigate();

    if (userLoading) {
        return <Spinner />
    }
    const handleToSignOut = () => {
        LogOut();
        navigate('/')
    }
    return (
        <div>
            <NavBer />
            <div className="drawer drawer-mobile bg-white max-w-[1440px]">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-bold bg-blue-200">

                        {
                            isCandidate && <>
                                <li><Link to={'/dashboard/myProfile'}>My Profile</Link></li>
                                <li><Link to={'/dashboard/skills'}>My Skills</Link></li>
                                <li><Link to={'/dashboard/Jobs'}>Jobs</Link></li>
                                <li><Link to={'/dashboard/editProfile'}>Edit Profile</Link></li>
                            </>
                        }
                        {
                            isRecruiter && <>
                                <li><Link to={'/dashboard/myProfile'}>My Profile</Link></li>
                                <li><Link to={'/dashboard/myJobs'}>My Jobs</Link></li>
                                <li><Link to={'/dashboard/addAJobs'}>Post A Jobs</Link></li>
                                <li><Link to={'/dashboard/editProfile'}>Edit Profile</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to={'/dashboard/newsLetter'}>News Letter</Link></li>
                                <li><Link to={'/dashboard/recruiters'}>All Recruiters</Link></li>
                                <li><Link to={'/dashboard/candidates'}>All Candidates</Link></li>
                                <li><Link to={'/dashboard/allJobs'}>All Jobs</Link></li>
                                <li><Link to={'/dashboard/reportedJobs'}>
                                    <span className='flex justify-between items-center'>
                                        <p>Reported Jobs</p>
                                        <p className='ml-5'>
                                            <div className="indicator">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                                <span className="badge badge-xs badge-primary indicator-item"></span>
                                            </div>
                                        </p>
                                    </span></Link></li>
                                <li><Link to={'/dashboard/reportedCandidate'}>Reported Candidates</Link></li>
                                <li><Link to={'/dashboard/reportedRecruiters'}>Reported Recruiters</Link></li>

                            </>
                        }
                        <li><Link to={'/dashboard/changePass'}>Change Password</Link></li>
                        <li><button onClick={handleToSignOut}>Sign Out</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;
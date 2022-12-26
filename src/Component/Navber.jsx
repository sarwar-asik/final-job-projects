import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthProvider/AuthProvider';
import { FcBusinessman } from 'react-icons/fc';


const NavBer = () => {

    const { user, LogOut } = useContext(AuthContext)

    return (
        <div className="navbar bg-slate-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-orange-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                        <p className='text-orange-500 ml-3'>Menu</p>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content 
                    mt-3 p-2 shadow bg-slate-900 text-orange-500 text-xl rounded-box w-52"
                    >
                        <li><Link to={'/'}>Homepage</Link></li>
                        {
                            user &&
                            <li><Link to={'/findJob'}>Find Jobs</Link></li>
                        }
                        <li><Link to={'/contact'}>Contact US</Link></li>
                        {
                            user ?
                                <></>
                                :
                                <>
                                    <li><Link to={'/login'}>Sign In</Link></li>
                                    <li><Link to={'/register'}>Sign Up</Link></li>
                                </>
                        }

                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to={'/'} className="btn btn-ghost normal-case text-orange-500 font-bold text-2xl">Find A Job</Link>
            </div>
            <div className="navbar-end">
                {/* when user loging then show it, now testing  */}
                {
                    user && <>
                        <p className=' text-xl invisible lg:visible text-orange-500 mr-5'>Welcome {user.displayName}</p>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user?.photoURL ?
                                            <img src={user.photoURL} alt="" />
                                            : <FcBusinessman className='text-4xl' />
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0}
                                className="menu menu-compact dropdown-content 
                    mt-3 p-2 shadow bg-slate-900 text-orange-500 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><Link to={'/dashboard'}>DashBoard</Link></li>
                                <li><Link to={'/message'}>Messages</Link></li>
                                <li><button onClick={LogOut}>Sign Out</button></li>
                            </ul>
                        </div>
                    </>
                }
                <div className="navbar-end  lg:hidden">
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NavBer;
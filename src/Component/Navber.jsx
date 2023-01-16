import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthProvider/AuthProvider';
import { FcBusinessman } from 'react-icons/fc';
import logo from '../asset/logo.png';
import coin from '../asset/Vlaunchu_coin.png';


const NavBer = () => {

    const { user, LogOut } = useContext(AuthContext)

    return (
        <div
        style={{
            backgroundColor: '#16a085',
          }}
        className="navbar bg-slate-100 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 bg-black text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                        <p className='text-black ml-3'>Menu</p>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content 
                    mt-3 p-2 shadow bg-slate-900 text-white text-xl rounded-box w-52"
                    >
                        <li><Link to={'/'}>Homepage</Link></li>
                        <li><Link to={'/payment'}>Payment</Link></li>
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
                <Link to={'/'} className="btn btn-ghost flex items-center normal-case bg-black font-bold text-2xl">

                    <img className='w-44' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-end">
                {/* when user loging then show it, now testing  */}
                {
                    user && <>
                        <p className=' text-xl invisible lg:visible text-black font-semibold mr-5'>Welcome {user.displayName}</p>
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
                                 mt-3 p-2 shadow bg-slate-900 text-white rounded-box w-52">
                                <li>
                                    <Link className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="justify-between">
                                        wallet <span className='flex items-center'>
                                            <p>100</p>
                                            <img className='w-8 ml-1' src={coin} alt="" />
                                        </span>
                                    </Link>
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
import React, { useState } from 'react';
import Chart_fill from '../../assets/Chart_fill.png';
import Chat from '../../assets/Chat.png';
import User from '../../assets/User.png';
import Calendar from '../../assets/Calendar.png';
import Search from '../../assets/Search.png';
import Chart from '../../assets/Chart.png';
import Folder from '../../assets/Folder.png';
import Setting from '../../assets/Setting.png';
import control from '../../assets/control.png';
import logo from '../../assets/logo.png';
import NavBer from '../../Component/Navber';
import Compose from '../../DashBoard/Message/Compose';
import { Link, Outlet } from 'react-router-dom';




const MailingLayout = () => {

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Inbox", src: Chat, route: "/message/inbox" },
        { title: "Sandbox", src: Chart_fill, route: "/message/sendbox" },
        { title: "Accounts", src: User, gap: true },
        { title: "Schedule ", src: Calendar },
        { title: "Search", src: Search },
        { title: "Analytics", src: Chart },
        { title: "Files ", src: Folder, gap: true },
        { title: "Setting", src: Setting },
    ];

    return (
        <div>
            <NavBer></NavBer>
            <div className="flex bg-white">
                <div
                    className={` ${open ? "w-72" : "w-20 "
                        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
                >
                    <img
                        src={control} alt=''
                        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />
                    <label htmlFor="Compose_modal" className="flex gap-x-4 items-center cursor-pointer">
                        <img
                            src={logo} alt=''
                            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                                }`}
                        />
                        <h1
                            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                }`}
                        >
                            Compose
                        </h1>
                    </label>
                    <ul className="pt-6">
                        {
                            Menus.map((Menu, index) => (
                                <li
                                    key={index}
                                >
                                    <Link className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} active:bg-light-white "
                                        } `} to={Menu.route}>
                                        <img src={Menu.src} alt="" />
                                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                                            {Menu.title}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="min-h-screen flex-1 p-7">
                    <Outlet />
                </div>

                <Compose />

                {/* The button to open modal */}


            </div>
        </div>
    );
};

export default MailingLayout;
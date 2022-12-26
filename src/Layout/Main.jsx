import React from 'react';
import NavBer from '../Component/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const Main = () => {
    return (
        <div>
            <NavBer />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
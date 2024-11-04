import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                {/* navber */}
                <Navbar></Navbar>

                {/* deynamic outlet */}
                <Outlet></Outlet>

                {/* footer */}


            </div>
                <Footer></Footer>
        </>
    );
};

export default MainLayout;
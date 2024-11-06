import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='bg-lime-100'>
            <div className='max-w-7xl mx-auto '>
                <Toaster />
                {/* navber */}
                <Navbar></Navbar>

                {/* deynamic outlet */}
                <Outlet></Outlet>

                {/* footer */}


            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
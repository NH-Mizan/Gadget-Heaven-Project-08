import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Navbar = () => {

    const {pathname} = useLocation()

// className=`${pathname ==='/deshboard' ? " navbar bg-white text-black justify-between py-4 ":"navbar   bg-purple-600 flex justify-between rounded-t-xl text-white py-4"}`


    return (
        <div className='sticky top-0 z-40  '>
            <div className='navbar  bg-purple-600 flex justify-between rounded-t-xl text-white py-4'>
                <div className="flex">
                    <p className="btn btn-ghost text-xl font-bold">Gadget Heaven </p>
                </div>
                <div className=' justify-center flex items-center' >
          
                        <ul className='flex items-center font-bold gap-6'>
                            <li> <NavLink  to='/' className={({isActive})=>`  font-bold  ${isActive?'btn btn-secondary':''}`}>Home</NavLink>
                            </li>
                            <li> <NavLink to='/products' className={({isActive})=>` font-bold ${isActive?'btn btn-secondary':''}`}>Statistics</NavLink>
                            </li>
                            <li><NavLink to='/deshboard' className={({isActive})=>`font-bold  ${isActive?'btn btn-secondary':''}`}>Deshboard</NavLink></li>
                        </ul>
                
                </div>
                <div className="flex-none gap-4">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn  btn-circle">
                            <div className="indicator">
                               <div className='text-xl font-bold'>
                               <MdOutlineLocalGroceryStore />

                               </div>
                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">0 Items</span>



                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-circle">
                            <div className="indicator">
                             <div className='text-xl font-bold'>
                             <FaRegHeart/>
                             </div>
                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">0 Items</span>



                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
    );
};

export default Navbar;
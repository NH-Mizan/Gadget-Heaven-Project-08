import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const Navbar = () => {






    return (
        <div>
            <div className="navbar bg-purple-600 flex justify-between rounded-t-xl text-white py-4">
                <div className="flex">
                    <p className="btn btn-ghost text-xl font-bold">Gadget Heaven </p>
                </div>
                <div className=' justify-center flex items-center' >
          
                        <ul className='flex font-bold gap-6'>
                            <li> <NavLink to='/'>Home</NavLink>
                            </li>
                            <li> <NavLink to=''>Statistics</NavLink>
                            </li>
                            <li><NavLink to='/deshboard'>Deshboard</NavLink></li>
                        </ul>
                
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                               <div className='text-2xl font-bold'>
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
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                             <div className='text-2xl font-bold'>
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
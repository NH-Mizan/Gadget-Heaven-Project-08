import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='mb-12'>
                <div className="hero   bg-purple-600 pt-8 pb-48 rounded-b-xl">
                    <div className=" text-center">
                        <div className="max-w-4xl text-white">
                            <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <NavLink to={'/deshboard'}>                            <button className="btn bg-purple-200 rounded-xl text-bold text-purple-600">Shop Now</button></NavLink>
                        </div>
                    </div>


                    
            
                </div>
                <div className='px-24 -mt-40'>
                    <div className="  border-2 border-white-100 rounded-xl bg-red-100  backdrop-blur bg-opacity-30 p-4  ">
                        <div className="   rounded-xl">
                          
                                <img src="https://i.ibb.co.com/9t9jHxB/banner.jpg" alt="" className='w-[1100px] h-[500px]  rounded-lg' />
                          
                     
                        </div>

                    </div>
                </div>
                

            </div>

        </div>
    );
};

export default Banner;
import React, { useEffect } from 'react';
import { NavLink, Outlet,  } from 'react-router-dom';

const Deshboard = () => {
    useEffect(()=>{
          document.title = "Deshboard |  Gadgethaven "
    },[])
   

    return (
        <div>
            <div className="hero  mt-4 bg-purple-600 py-8  rounded-xl">
                <div className=" text-center">
                    <div className="max-w-4xl text-white">
                        <h1 className="text-5xl font-bold"> Dashboard  </h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>

                    </div>
                    <div>
                   <NavLink to={'/deshboard/addtocard'}  className={({isActive})=>`btn mr-4 rounded-3xl text-bold text-purple-600  font-bold  ${isActive?'btn btn-secondary':''}`}> <button >Added card</button></NavLink>

                   
                    <NavLink to={'/deshboard/wishlist'}  className={({isActive})=>` btn  rounded-3xl text-bold text-purple-600 font-bold  ${isActive?'btn btn-secondary':''}`}>
                    <button >Wish List</button>
                    </NavLink>
                    </div>
                </div>
            </div>

            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Deshboard;
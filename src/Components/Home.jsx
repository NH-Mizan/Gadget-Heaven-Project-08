import React, { useEffect } from 'react';
import Banner from './Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categoris from './Categoris';


const Home = () => {
    const categories = useLoaderData()

    
  useEffect(()=>{
    document.title = "Home page | GadgetWave pages"
  },[])
 
    
    return (
        <div>
        

            <Banner></Banner>

            <div className='flex '>
                <Categoris categories={categories}></Categoris>

                <Outlet></Outlet>
            </div>




        </div>
    );
};

export default Home;
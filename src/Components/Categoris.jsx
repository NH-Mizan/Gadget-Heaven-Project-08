import React from 'react';
import { NavLink } from 'react-router-dom';

const Categoris = ({ categories }) => {
    return (
        <div>
            <div className='mr-12 bg-lime-300 p-2 rounded-xl mb-4'>
                <NavLink to='/card'  className={({isActive})=>`btn mb-4 font-bold flex flex-row ${isActive?'btn-secondary':'btn'}`}>All Products</NavLink>
                
            {
                categories.map(category => (
                    <NavLink to={`/category/${category.category}`} key={category.category} className={({isActive})=>`btn mb-4 font-bold flex flex-row ${isActive?'btn-secondary':'btn'}`}>{category.category}</NavLink>
                ))
            }
            </div>

        </div>
    );
};

export default Categoris;
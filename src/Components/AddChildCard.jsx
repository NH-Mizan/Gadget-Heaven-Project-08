import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const AddChildCard = ({item}) => {
    const { brand, rating, Specification, description, price, product_title, image } = item;
    return (
        <div>
            <div className=" bg-base-100 flex border-2 mb-6 items-center justify-between rounded-xl p-6  shadow-xl">
             <div className='flex gap-12 items-center'>
             <img src={image} alt="" className='w-32' />
               <div >
                <h2 className='text-3xl font-bold '>{product_title}</h2>
                <p className='text-lg font-bold text-purple-400 my-4'>{description}</p>

                <p className='text-xl font-bold '>Price : $ {price}</p>

               </div>
             </div>
               <button className='text-3xl text-red-500'><FaTrashAlt /></button>
            </div>
            
        </div>
    );
};

export default AddChildCard;
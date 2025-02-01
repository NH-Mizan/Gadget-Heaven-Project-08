import React from 'react';

const WishChildList = ({item}) => {
    const { brand, rating, Specification, description, price, product_title, image } = item;
    return (
        <div className=" bg-base-100 flex border-2 mb-6 items-center justify-between rounded-xl p-6  shadow-xl">
        <div className='flex gap-12 items-center'>
        <img src={image} alt="" className='w-32' />
          <div >
           <h2 className='text-3xl font-bold '>{product_title}</h2>
           <p className='text-lg font-bold text-purple-400 my-4'>{description}</p>

           <p className='text-xl font-bold '>Price : $ {price}</p>
           <button className='text-green-500 border-2 border-green-500 rounded-3xl px-2 mt-4'>Add to card </button>

          
          </div>
        </div>
        
       </div>
    );
};

export default WishChildList;
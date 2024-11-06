import React, { useEffect, useState } from 'react';
import { getWishProducts } from '../localstore';
import WishChildList from './WishChildList';

const Wishlist = () => {

    const [wishCard, setWishcard]=useState([])
    useEffect(()=>{
       const addWishProducts = getWishProducts();
       
       setWishcard(addWishProducts)
    },[])
    return (
        <div className='mt-12'>
            {
                wishCard.map((item, i)=> <WishChildList key={i} item={item}></WishChildList>)
            }
        </div>
    );
};

export default Wishlist
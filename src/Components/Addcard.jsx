import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../localstore';
import AddChildCard from './AddChildCard';




const Addcard = () => {
    const [cardProduct, setcardProduct] = useState([])
    useEffect(()=>{
        const product = getAllProducts();
        setcardProduct(product);
    },[])
    console.log(cardProduct)
    return (
        <div>
            <div className=' rouned-lg mt-12'>
                <div className='flex justify-between mb-12 '>
                    <h2 className="text-xl font-bold ">Card</h2>
                    <div className='flex items-center '>
                        <h2 className="text-xl font-bold mr-24">Total cost : $ </h2>
                        <button className='btn mr-4 btn-outline btn-primary'>Sort by Price </button>
                        <button className='btn  btn-primary'> Purchse </button>
                    </div>
                </div>

                <div>
                    {
                        cardProduct.map((item , i) => <AddChildCard key={i} item={item}></AddChildCard>)
                    }

                    
                </div>
            </div>

            
        </div>
    );
};

export default Addcard;
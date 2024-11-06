import React, { useEffect, useState } from 'react';
import { getAllProducts, removeProduct } from '../localstore';
import AddChildCard from './AddChildCard';
import toast from "react-hot-toast";




const Addcard = () => {
    const [cardProduct, setcardProduct] = useState([])
    useEffect(()=>{
        const product = getAllProducts();
        setcardProduct(product);
    },[])
    
    const handleRemove =productId=>{
        removeProduct(productId);
        const product = getAllProducts();
        setcardProduct(product);
    }
    const handleSortPrice = () =>{
        const sortedcard = [...cardProduct].sort((a,b) => a.price - b.price)
        setcardProduct(sortedcard)
        toast.success('Successfull Sort by  product!');
        

    }

    return (
        <div>
            <div className=' rouned-lg mt-12'>
                <div className='flex justify-between mb-12 '>
                    <h2 className="text-xl font-bold ">Card</h2>
                    <div className='flex items-center '>
                        <h2 className="text-xl font-bold mr-24">Total cost : $ </h2>
                        <button onClick={()=>handleSortPrice("price")} className='btn mr-4 btn-outline btn-primary'>Sort by Price </button>
                        <button className='btn  btn-primary'> Purchse </button>
                    </div>
                </div>

                <div>
                    {
                        cardProduct.map((item , i) => <AddChildCard key={i} item={item} handleRemove={handleRemove} ></AddChildCard>)
                    }

                    
                </div>
            </div>

            
        </div>
    );
};

export default Addcard;
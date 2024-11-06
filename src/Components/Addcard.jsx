import React, { useEffect, useState } from 'react';
import { getAllProducts, removeProduct, removeProducts } from '../localstore';
import AddChildCard from './AddChildCard';
import toast from "react-hot-toast";




const Addcard = () => {
    const [cardProduct, setcardProduct] = useState([])
    const [price, setPrice] = useState(0)

    useEffect(() => {
        const product = getAllProducts();
        setcardProduct(product);
        const price = product.reduce((pre, cur) => pre + cur.price, 0)
        setPrice(price)

    }, [])

    const handleRemove = productId => {
        removeProduct(productId);
        const product = getAllProducts();
        setcardProduct(product);
    }
    const handleSortPrice = () => {
        const sortedcard = [...cardProduct].sort((a, b) => b.price - a.price)
        setcardProduct(sortedcard)
        toast.success('Successfull Sort by  product!');


    }
    const handlePurchseBtn=(id)=>{
        removeProducts(id)
        console.log(id)
     
    } 

    return (
        <div>
            <div className=' rouned-lg mt-12'>
                <div className='flex justify-between mb-12 '>
                    <h2 className="text-xl font-bold ">Card</h2>
                    <div className='flex items-center '>
                        <h2 className="text-xl font-bold mr-24">Total cost : $ {price} </h2>
                        <button onClick={() => handleSortPrice("price")} className='btn mr-4 btn-outline btn-primary'>Sort by Price </button>
                        <button onClick={()=>handlePurchseBtn(cardProduct[0].productId)} className='btn  btn-primary'> Purchse </button>
                    </div>
                </div>

                <div>
                    {
                        cardProduct.map((item, i) => <AddChildCard key={i} item={item} handleRemove={handleRemove} ></AddChildCard>)
                    }


                </div>
            </div>


        </div>
    );
};

export default Addcard;
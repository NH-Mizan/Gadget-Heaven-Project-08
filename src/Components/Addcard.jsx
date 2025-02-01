import React, { useEffect, useState } from 'react';
import { getAllProducts, removeProduct, removeProducts } from '../localstore';
import AddChildCard from './AddChildCard';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';





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
    const handlePurchseBtn = (id) => {
    
        console.log(id)

        document.getElementById('my_modal_1').showModal()

        removeProducts(id)
       

    }

    return (
        <div>
          
            <dialog id="my_modal_1" className="modal text-center">
                <div className="modal-box flex justify-center items-center flex-col">
                    <img src="https://i.ibb.co.com/StHFBM7/Group.png" alt="" />
                    <h3 className="font-bold text-xl">Successfull your Payment</h3>
                    <p className="py-4 text-lg">Thanks purchaing for Products </p>
                    <p className='font-bold'> Total price : $ {price} </p>
                    <div className="modal-action">
                    <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={'/'}> <button className="btn">Close</button></Link>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className=' rouned-lg mt-12'>
                <div className='flex justify-between mb-12 '>
                    <h2 className="text-xl font-bold ">Card</h2>
                    <div className='flex items-center '>
                        <h2 className="text-xl font-bold mr-24">Total cost : $ {price} </h2>
                        <button onClick={() => handleSortPrice("price")} className='btn mr-4 btn-outline btn-primary'>Sort by Price </button>
                        <button onClick={() => handlePurchseBtn()} className='btn  btn-primary'> Purchse </button>
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
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { addProducts, addWishProducts,  } from '../localstore';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const ProductDetails = () => {

    const { productId } = useParams();
    const data = useLoaderData();
    const [product, setProducts] = useState({})
    const [isAdd, ] = useState(false)
    useEffect(() => {
        const singleProducts = data.find(product => product.productId == productId)
        setProducts(singleProducts)

  
    }, [data, productId]);


    const { brand, rating, Specification, description, price, product_title, image } = product;

    const handleAddProduct = (product) => {
        addProducts(product)
  

    }

    const handleWishBtn=(product)=>{

        addWishProducts(product)
    }


    return (
        <div>

            <div className='mb-24'>
                <div className="hero   bg-purple-600 pt-8 pb-48 rounded-b-xl">
                    <div className=" text-center">
                        <div className="max-w-4xl text-white">
                            <h1 className="text-5xl font-bold">Products Details  </h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>

                        </div>
                    </div>
                </div>

                <div className='px-24 -mt-40'>
                    <div className="  border-2 border-white-100 rounded-xl bg-white   ">
                        <div>
                            <div className="p-12 rounded-xl  ">
                                <div className="grid  gap-12  grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                                    <div>
                                        <img
                                            src={image} className=' rounded-xl h-full w-full' />
                                    </div>
                                    <div>
                                        <h1 className="text-5xl font-bold">{product_title}</h1>
                                        <p className="py-6 font-bold text-lg">
                                            Price : $ {price}
                                        </p>
                                        <button className='p-2 rounded-full mb-2 border-2 border-green-300 font-bold text-green-300'>In Stock</button>
                                        <p className='text-lg text-gray-400 '>  {description}</p>


                                        <div>
                                            <h2 className='text-xl mb-4 font-bold '> Specification : </h2>
                                            {Specification &&
                                                Specification.map((single, i) =>
                                                    <li key={i} className='text-gray-400'> {single}</li>
                                                )
                                            }

                                        </div>

                                        <div className='mb-4'>
                                            <h2 className='font-bold text-xl'>Rating :</h2>
                                            <div className='flex items-center gap-12 font-bold '>
                                                <Rating
                                                    style={{ maxWidth: 140 }}
                                                    value={rating}
                                                    readOnly
                                                />
                                                {rating}
                                            </div>

                                        </div>

                                     

                                        <div className='flex items-center'>
                                            <button onClick={() => handleAddProduct(product)} className="btn btn-primary mr-4">Add To Card</button>
                                            <button onClick={()=>handleWishBtn(product)} className=" font-bold text-2xl bg-green-300 p-2 rounded-full">          <FaRegHeart /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>




        </div>

    );
};

export default ProductDetails;
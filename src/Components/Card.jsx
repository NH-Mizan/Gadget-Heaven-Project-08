import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({getpro}) => {
    // console.log(projet)
    const{price,image,product_title,productId}=getpro;


    return (
        <div >

            <div className="card bg-base-100  p-2  shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Loading..." className='h-64 w-full ' />
                </figure>
                <div className="card-body bg-green-100">
                    <div className='h-12'>
                    <h2 className="card-title">{product_title}</h2>

                   
                    </div>
                    <p className='font-bold mt-2'>Price :$ {price}</p>
                 
                    <div className="card-actions justify-end">
                        <Link to={`/products/${productId}`}  className="btn btn-outline  btn-secondary">
                      Details</Link>
                      

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Card;
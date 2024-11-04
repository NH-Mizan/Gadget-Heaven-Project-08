import React from 'react';

const Card = ({product}) => {

    


    return (
        <div >

            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        // src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* <h2 className="card-title">{product_title}</h2> */}
                    <p>{product.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Card;
import React from 'react';

const CardStore = ({item}) => {
    const { brand, rating, Specification, description, price, product_title, image } = item
    return (
        <div>
            <div>
                <img src={image} alt="" />

            </div>
        </div>
    );
};

export default CardStore;
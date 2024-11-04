import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Products = () => {


    const [product, setProduct] = useState([])

    const data = useLoaderData();

    const { category } = useParams()
    useEffect(()=>{
        if(category){
            const getCatogory = [...data].filter(item => item.category === category);
            setProduct(getCatogory)
        }else{
            setProduct(data.slice(0, 9))
        }
    },[data,category])


    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {
                product.map(getpro => <Card key={getpro.id} product={product}></Card>)
            }



        </div>
    );
};

export default Products;
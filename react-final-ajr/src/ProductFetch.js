import React, { useEffect } from 'react';
import { useState } from 'react';
import ProductPhotoProducer from './ProductPhotoProducer';
import './productFetch.module.css';


const ProductFetch = () => {
    const [products, setProducts] = useState([]);
    
    const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        console.log(data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        
        <div className="box">
            <>
            {products.length > 0 && (
                <ul>
                    {products.map(product => (
                        <li className="listitem" key={product.id}>
                            <img src={product.image}></img><br />
                            {product.title}<br />
                            {product.price}
                        </li>
                    ))}
                </ul>
            )}
            </>
        </div>
        
    )
    
};

export default ProductFetch;
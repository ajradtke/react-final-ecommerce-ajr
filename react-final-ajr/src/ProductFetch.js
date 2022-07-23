import React, { useEffect, useSyncExternalStore } from 'react';
import { useState } from 'react';

const ProductFetch = () => {
    const [products, setProducts] = useState([]);
    // const fetchData = () => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(data => setProducts(data))
    // };

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
        <div>
            {products.length > 0 && (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.title}--{product.price}</li>
                    ))}
                </ul>
            )}
        </div>
    )
    
};

export default ProductFetch;
import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import './productFetch.module.css';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';

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
            <h1>Product Fetch Page</h1>
            <>
            {products.length > 0 && (
                <ul>
                    {products.map(product => (
                        <li className="listitem" key={product.id}>
                            <img src={product.image} alt={product.title}></img><br />
                            <Link to={`/products/${product.id}`}><h5>{product.title}</h5></Link> <br />
                            <h6>{product.price}</h6>
                        </li>
                        

                    ))}
                </ul>
            )}
            </>
        </div>
        
    )
    
};

export default ProductFetch;
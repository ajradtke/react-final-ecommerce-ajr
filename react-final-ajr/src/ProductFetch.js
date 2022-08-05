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
        
        <div>
            <h1>Product Page</h1>
            <>
            <div className="container d-flex justify-content-center">
                {products.length > 0 && (
                    <ul className="d-flex flex-wrap justify-content-center">
                        {products.map(product => (
                            <li className="listitem p-3 border shadow m-1 rounded" key={product.id}>
                                <img src={product.image} alt={product.title}></img><br />
                                <Link to={`/products/${product.id}`}><h5>{product.title}</h5></Link> <br />
                                <h6>{product.price}</h6>
                            </li>
                            

                        ))}
                    </ul>
                )}
            </div>
            </>
        </div>
        
    )
    
};

export default ProductFetch;
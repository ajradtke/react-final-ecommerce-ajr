import React from "react";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import './productDetails.module.css';

const ProductDetails = () => {

    const params = useParams();
    console.log('Params:' ,params.id);

    const [item, setItem] = useState({});

    const fetchProduct = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const items = await data.json();
        setItem(items);
    };

    useEffect(() => {
        fetchProduct();
    },[]);

    console.log(item);

    return (
        <div>
            <img src={item.image}></img>
            <h1>{item.title}</h1>
            <h4>${item.price}</h4>
            <h4>{item.category}</h4>
            <h4>{item.description}</h4>
            <Link to="/products"><button>Return to Catalog</button></Link>
        </div>
        
    )

};

export default ProductDetails;
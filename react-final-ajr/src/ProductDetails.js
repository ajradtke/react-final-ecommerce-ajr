import React from "react";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './productDetails.module.css';

const ProductDetails = () => {
    
    

    const params = useParams();
    console.log('Params:' ,params.id);

    const [item, setItem] = useState([]);

    const fetchProduct = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const items = await data.json();
        setItem(items);
        console.log('Item: ', item);
    };

    useEffect(() => {
        fetchProduct();
    },[]);

    return (
        <h1>Single Product Details</h1>
    )

};

export default ProductDetails;
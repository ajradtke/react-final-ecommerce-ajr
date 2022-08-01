import React from "react";
import { useEffect, useState,  useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import './productDetails.module.css';
import CartContext from './CartContext';

const ProductDetails = () => {
    const {addToCart} = useContext(CartContext);
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
            <img src={item.image} alt=""></img>
            <h1>{item.title}</h1>
            <h4>${item.price}</h4>
            <h4>{item.category}</h4>
            <h4>{item.description}</h4>
            <button onClick={() => addToCart(item.description, item.id, item.image, item.price, item.title)}>Add To Cart</button><br />
            <Link to="/products"><button>Return to Catalog</button></Link>
        </div>
        
    )

};

export default ProductDetails;
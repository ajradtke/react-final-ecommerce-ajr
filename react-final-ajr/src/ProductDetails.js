import React from "react";
import { useEffect, useState,  useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import './productDetails.module.css';
import CartContext from './CartContext';

const ProductDetails = () => {
    
    const {addToCart} = useContext(CartContext);
    const {addQuantity} = useContext(CartContext);
    const params = useParams();

    const [item, setItem] = useState({});

    const fetchProduct = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
        const items = await data.json();
        setItem(items);
    };

    useEffect(() => {
        fetchProduct();
    },[]);

    return (
        <div>
            <img src={item.image} alt=""></img>
            <h1>{item.title}</h1>
            <h4>${item.price}</h4>
            <h4>{item.category}</h4>
            <h4>{item.description}</h4>
            <form>
                <input type='number' placeholder='0' min='0' max='10' id='numInput'></input>
            </form>
            <button onClick={() => {
                const numInput = parseInt(document.getElementById("numInput").value)
                addToCart(item.description, item.id, item.image, item.price, item.title, item.quantity = numInput );
                }}>
                    Add To Cart</button><br />
            <Link to="/products"><button>Return to Catalog</button></Link>
        </div>
        
    )

};

export default ProductDetails;
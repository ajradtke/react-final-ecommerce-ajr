import React from 'react';
import './cart.module.css';
import CartContext from './CartContext';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { ReactDOM } from 'react';

const Cart = () => {
    const {setItems} = useContext(CartContext);
    const {items} = useContext(CartContext);

    const remove = (item) => {
        let filteredArr = items.filter((el) => el !== item);
        setItems(filteredArr);
    }

    return (
        <div>
            <h1 className="m-3">Cart Page</h1>
            <div className="container d-flex justify-content-center m-3">
                {items.map(item => (
                            <li className="listitem p-3 border shadow m-1 rounded" key={item.id}>
                                <img src={item.image}></img>
                                <h6>{item.title}</h6><br />
                                <h6>{item.price}</h6>
                                <h6>Quantity: {item.quantity}</h6>
                                <button onClick={() => {
                                    remove(item)
                                }}>Remove From Cart</button>
                            </li>
                            

                        ))}
            </div>
            <Link to="/checkout"><h4 className="m-5"><i class="fa-solid fa-cart-shopping fa-2xl"></i>Checkout</h4></Link>
        </div>
    )
};

export default Cart;
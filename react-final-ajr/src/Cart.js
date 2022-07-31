import React from 'react';
import './cart.module.css';
import CartContext from './CartContext';
import {useContext} from 'react';

const Cart = () => {

    const [items] = useContext(CartContext);

    return (
        <div>
            <h1>Cart Page</h1>
            <span>{items.length}</span>
        </div>
    )
};

export default Cart;
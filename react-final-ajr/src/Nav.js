import React, {useContext} from 'react';
import './nav.module.css';
import ProductFetch from './ProductFetch';
import Cart from './Cart';
import Checkout from './Checkout';
import {Link} from 'react-router-dom';
import CartContext from './CartContext';

const Nav = () => {

    const {items} = useContext(CartContext);
    const initialState = { count: 0 };

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1};
        case 'decrement':
            return { count: state.count - 1};
        default:
            throw new Error();
    }
};

    return (
        <div>
            <h1>Nav Header</h1>
            <Link to="/products"><h4>Products</h4></Link>
            <Link to="/cart"><h4><i class="fa-solid fa-cart-shopping fa-2xl"></i>Cart({items.length})</h4></Link>
        </div>
    )
}

export default Nav;
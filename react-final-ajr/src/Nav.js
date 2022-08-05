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
        <div className="d-flex justify-content-around p-3 bg-secondary w-100 text-white">
            <h3>Nav Header</h3>
            <Link style={{textDecoration: 'none'}} to="/products" className="text-white"><h4>Products</h4></Link>
            <Link style={{textDecoration: 'none'}} to="/cart" className="text-white"><h4><i class="fa-solid fa-cart-shopping fa-2xl"></i>Cart({items.length})</h4></Link>
        </div>
    )
}

export default Nav;
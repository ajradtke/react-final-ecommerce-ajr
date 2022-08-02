import React from 'react';
import './cart.module.css';
import CartContext from './CartContext';
import {useContext} from 'react';
import {Link} from 'react-router-dom';

const Cart = () => {

    const {items} = useContext(CartContext);
    const {removeFromCart} = useContext(CartContext);

    console.log(items);

    return (
        <div>
            <h1>Cart Page</h1>
            {items.map(item => (
                        <li className="listitem" key={item.id}>
                            <img src={item.image}></img>
                            <h6>{item.title}</h6><br />
                            <h6>{item.price}</h6>
                            <h6>Quantity:</h6>
                            <button onClick={() => {
                                removeFromCart(items)
                            }}>Remove From Cart</button>
                        </li>
                        

                    ))}
            <Link to="/checkout"><h4><i class="fa-solid fa-cart-shopping fa-2xl"></i>Checkout</h4></Link>
        </div>
    )
};

export default Cart;
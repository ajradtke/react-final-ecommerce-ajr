import React from 'react';
import './checkout.module.css';
import {useState, useContext} from 'react';
import CartContext from './CartContext';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
    const {items} = useContext(CartContext);
    const [itemTotal, setItemTotal] = useState();
    const [cartTotal, setCartTotal] = useState();
    
    console.log('Items: ',items);

    const cartArray = () => 
    items.map((item) => {
        return item.price * item.quantity;
    })
    console.log('cartArray',cartArray());

    const cartProductTotal =
        cartArray().reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);

    console.log('cartProductTotal', cartProductTotal);
    


    return (
        <div>
            <h1>Checkout Page</h1>
            {items.map(item => (
                        <li className="listitem" key={item.id}>
                            <img src={item.image}></img>
                            <h6>{item.title}</h6><br />
                            <h6>{item.price}</h6>
                            <h6>Quantity: {item.quantity}</h6>
                            <h6>Total: {item.itemTotal}</h6>
                            
                        </li>
                    ))}
            <h4>Cart Total: $ {cartProductTotal.toFixed(2)}</h4>
            <CheckoutForm />
        </div>
    )
};

export default Checkout;
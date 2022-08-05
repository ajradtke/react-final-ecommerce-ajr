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
            <h1 className="m-3">Checkout Page</h1>
            <div className="container d-flex justify-content-center m-3">
                {items.map(item => (
                            <li className="listitem p-3 border shadow m-1 rounded" key={item.id}>
                                <img src={item.image}></img>
                                <h6>{item.title}</h6><br />
                                <h6>{item.price}</h6>
                                <h6>Quantity: {item.quantity}</h6>
                                <h6>Total: {item.itemTotal}</h6>
                                
                            </li>
                        ))}
            </div>

            <h4>Cart Total: $ {cartProductTotal.toFixed(2)}</h4>
            <CheckoutForm />
        </div>
    )
};

export default Checkout;
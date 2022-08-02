import React from 'react';
import './checkout.module.css';
import {useState, useContext} from 'react';
import CartContext from './CartContext';

const Checkout = () => {
    const {items} = useContext(CartContext);
    const [itemTotal, setItemTotal] = useState();
    const [cartTotal, setCartTotal] = useState();
    
    
    console.log('Items: ',items);

    

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
        </div>
    )
};

export default Checkout;
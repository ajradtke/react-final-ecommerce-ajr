import React from 'react';
import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

    const [items, setItems] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(0);
    console.log(items);

    const addQuantity = (props) => {
        setItemQuantity(document.getElementById(props).value);
        
    };

    
    

    const addToCart = (description, id, image, price, title, quantity) => {
        setItems((prevState) => [...prevState, { description, id, image, price, title, quantity }]);
        
    }

    // const removeFromCart = (props) => {
    //     const result = props.filter(removeItem);
    //     const removeItem = (x) => {
    //         return x !== x;
    //     }
    // }

    return(
        <CartContext.Provider value={{items, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;


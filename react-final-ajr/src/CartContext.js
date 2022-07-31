import React from 'react';
import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

    const [items, setItems] = useState([]);

    console.log(items);

    const addToCart = (title, price, description, image, id) => {
        setItems((prevState) => [...prevState, { title, price, description, image, id }]);
    }

    return(
        <CartContext.Provider value={{items, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;


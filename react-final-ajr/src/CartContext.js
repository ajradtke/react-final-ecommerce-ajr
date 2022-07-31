import React from 'react';
import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

    const [items, setItems] = useState([]);

    const addToCart = (title, price, image) => {
        setItems((prevState) => [...prevState, { title, price, image}]);
    }

    return(
        <CartContext.Provider value={{items, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;


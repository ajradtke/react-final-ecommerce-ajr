import React from 'react';
import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

    const [items, setItems] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(items);

    console.log(items);
    

    const addToCart = (description, id, image, price, title) => {
        setItems((prevState) => [...prevState, { description, id, image, price, title }]);
    }

    console.log(itemQuantity);

    return(
        <CartContext.Provider value={{items, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;


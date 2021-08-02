import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (id, title, cantidad) => {
        const idNumber = parseInt(id)

        const indexFound = cartItems.findIndex(elem => elem.id === idNumber)

        if (indexFound !== -1)
        {
            const cartItemsUpdated = [...cartItems]
            cartItemsUpdated[indexFound].cantidad += cantidad
            setCartItems(cartItemsUpdated)
        }
        else setCartItems([...cartItems, {id: parseInt(id), title, cantidad: parseInt(cantidad)}])
    }

    const deleteItem = id => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== id))
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItem,
                deleteItem
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
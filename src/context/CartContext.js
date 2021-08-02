import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([{id:1, cantidad: 5}]);

    const addItem = (id, cantidad) => {
        const idNumber = parseInt(id)

        const indexFound = cartItems.findIndex(elem => elem.id === idNumber)

        if (indexFound !== -1)
        {
            const cartItemsUpdated = [...cartItems]
            cartItemsUpdated[indexFound].cantidad += cantidad
            setCartItems(cartItemsUpdated)
        }
        else setCartItems([...cartItems, {id: parseInt(id), cantidad: parseInt(cantidad)}])
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItem
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
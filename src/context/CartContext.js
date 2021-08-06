import React, { createContext, useContext, useState } from 'react';
import { useAppContext } from './AppContext'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const { productos } = useAppContext();

    const [cartItems, setCartItems] = useState([]);

    const addItem = (producto) => {
        
        const indexFound = cartItems.findIndex(elem => elem.id === producto.id)

        if (indexFound !== -1)
        {
            const cartItemsUpdated = [...cartItems]
            cartItemsUpdated[indexFound].cantidad += producto.cantidad
            setCartItems(cartItemsUpdated)
        }
        else setCartItems([...cartItems, {...producto, cantidad: parseInt(producto.cantidad)}])
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
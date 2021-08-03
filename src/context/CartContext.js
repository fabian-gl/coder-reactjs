import React, { createContext, useContext, useState } from 'react';
import { useAppContext } from './AppContext'

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const { productos } = useAppContext();

    const [cartItems, setCartItems] = useState([]);

    const addItem = (id, cantidad) => {
        const idNumber = parseInt(id)

        const producto = getProductFromId(idNumber)

        const indexFound = cartItems.findIndex(elem => elem.id === idNumber)

        if (indexFound !== -1)
        {
            const cartItemsUpdated = [...cartItems]
            cartItemsUpdated[indexFound].cantidad += cantidad
            setCartItems(cartItemsUpdated)
        }
        else setCartItems([...cartItems, {...producto, cantidad: parseInt(cantidad)}])
    }

    const getProductFromId = id => productos.filter(producto => parseInt(producto.id) === id)[0]

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
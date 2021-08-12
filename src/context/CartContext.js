import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [numItems, setNumItems] = useState(0)
    
    useEffect(() => {
        setNumItems(cartItems.reduce((acum, act) => acum + act.cantidad, 0))
    }, [cartItems])

    const addItem = (producto) => {
        
        const indexFound = cartItems.findIndex(elem => elem.id === producto.id)

        if (indexFound !== -1)
        {
            const cartItemsUpdated = [...cartItems]
            cartItemsUpdated[indexFound].cantidad += producto.cantidad
            setCartItems(cartItemsUpdated)
        }
        else setCartItems([...cartItems, {...producto}])
    }

    const deleteItem = id => setCartItems(cartItems.filter(cartItem => cartItem.id !== id))

    return (
        <CartContext.Provider
            value={{
                numItems,
                cartItems,
                addItem,
                deleteItem
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [numItems, setNumItems] = useState(0)
    
    // Este useEffect lo uso para evitar calcular el número de items de cart
    // en el propio CartWidget, porque lo pedía la rúbrica.
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

    const clearItems = () => setCartItems([])
    
    return (
        <CartContext.Provider
            value={{
                numItems,
                cartItems,
                addItem,
                deleteItem,
                clearItems
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
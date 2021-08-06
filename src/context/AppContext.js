import React, { createContext, useContext, useState } from 'react';

import { getProducts } from '../firebase/queries'

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);


const AppContextProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const getAllProducts = async () => {
        setLoading(true)
        // Si ya está la lista cargada, no la vuelve a cargar
        if (!productos.length) setProductos(await getProducts())
        setLoading(false)
    }

    return (
        <AppContext.Provider
            value={{
                loading,
                productos,
                getAllProducts,
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
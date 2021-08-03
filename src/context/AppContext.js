import React, { createContext, useContext, useState } from 'react';

import listaDeProductos from '../productos.json'

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const mockCallGetAllProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(listaDeProductos)
        }, 2000)
    })
}

const AppContextProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const getAllProducts = async () => {
        setLoading(true)
        // Si ya está la lista cargada, no la vuelve a cargar
        if (!productos.length) setProductos(await mockCallGetAllProducts())
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
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

const filtraSiAplica = (listaDeProductos, categoryid) => {
    if (categoryid) return listaDeProductos.filter(producto => producto.category === categoryid)
    else return listaDeProductos
}

const AppContextProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [loading, setLoading] = useState(false)
    const [sinResultados, setSinResultados] = useState(false)

    const getProductosFiltrados = async (categoryid) => {
        
        let listaAFiltrar = []

        // Si no trajo los productos desde la BD, lo hace ahora
        if (productos.length === 0)
        {
            setLoading(true)
            listaAFiltrar = await mockCallGetAllProducts()
            setLoading(false)
            setProductos(listaAFiltrar)
        }
        else listaAFiltrar = productos

        const listaAMostrar = filtraSiAplica(listaAFiltrar, categoryid)

        setSinResultados(listaAMostrar.length === 0)
        setProductosFiltrados(listaAMostrar)
    }

    return (
        <AppContext.Provider
            value={{
                loading,
                productos,
                productosFiltrados,
                sinResultados,
                getProductosFiltrados
            }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
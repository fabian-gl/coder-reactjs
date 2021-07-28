import './ItemDetailContainer.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Spinner from '../Spinner/Spinner'
import ItemDetail from '../ItemDetail/ItemDetail'
import listaDeProductos from '../../productos.json'
import NotFound from '../NotFound/NotFound'


function mockGetFromServer(idProducto)
{
    return new Promise((resolve, reject) => {
        window.setTimeout( () => {
            const productoEncontrado = listaDeProductos.filter(producto => producto.id === String(idProducto))[0]
            if (!productoEncontrado) reject()
            resolve(productoEncontrado)
        }, 2000)
    })
}

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const [noEncontrado, setNoEncontrado] = useState(false)
    const [loading, setLoading] = useState(false)

    let { productid } = useParams()

    useEffect(() => {
        setLoading(true)
        mockGetFromServer(productid)
            .then(setProducto)
            .catch(() => setNoEncontrado(true))
            .finally(() => setLoading(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='cont-item-detail-container'>
            {loading && <Spinner />}
            {noEncontrado && <NotFound message='No existe ese producto...' />}
            {producto && <ItemDetail {...producto} />}
        </div>
    )
}

export default ItemDetailContainer

import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import listaDeProductos from '../../productos.json'


function mockGetFromServer(idProducto = 1)
{
    return new Promise((resolve, reject) => {
        window.setTimeout( () => {
            const productoEncontrado = listaDeProductos.filter(producto => producto.id === String(idProducto))[0]
            resolve(productoEncontrado)
        }, 2000)
    })
}

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        mockGetFromServer(2).then(setProducto)
    }, [])

    if (producto)
    {
        return (
            <div className='cont-item-detail-container'>
                <h1>Soy el ItemDetailContainer</h1>
                <ItemDetail {...producto} />
            </div>
        )
    }
    else
    {
        return (
            <div className='cont-item-detail-container'>
                <h1>Soy el ItemDetailContainer</h1>
            </div>
        )
    }
}

export default ItemDetailContainer

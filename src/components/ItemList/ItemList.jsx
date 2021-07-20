import { useState, useEffect } from 'react'

import './ItemList.css'
import Item from '../Item/Item'
import listaDeProductos from '../../productos.json'


function mockGetFromServer()
{
    return new Promise((resolve, reject) => {
        window.setTimeout( () => {
            resolve(listaDeProductos)
        }, 2000)
    })
}

const ItemList = () => {
    const [lista, setLista] = useState([])
    useEffect( () => {
        mockGetFromServer().then(productos => {
            setLista(productos)
        })
    })

    return (
        <div className='cont-item-list'>
            {lista.map(producto => <Item key={producto.id} {...producto} />)}
        </div>
    )
}

export default ItemList

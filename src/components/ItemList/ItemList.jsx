import { useState, useEffect } from 'react'

import './ItemList.css'
import Item from '../Item/Item'



function mockGetFromServer()
{
    const listaDeProductos = [
        {id: '1', title: 'Guitarra eléctrica', price: 355, pictureUrl: 'guitarra-electrica.jpg'},
        {id: '2', title: 'Guitarra acústica', price: 419, pictureUrl: 'guitarra-acustica.jpg'},
        {id: '3', title: 'Guitarra criolla', price: 322, pictureUrl: 'guitarra-clasica.jpg'},
    ]
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
            // console.log(productos)
        })
    })

    return (
        <div className='cont-item-list'>
            {lista.map(producto => <Item key={producto.id} {...producto} />)}
        </div>
    )
}

export default ItemList

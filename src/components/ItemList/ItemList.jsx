import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './ItemList.css'
import Item from '../Item/Item'
import listaDeProductos from '../../productos.json'
import Spinner from '../Spinner/Spinner'
import NotFound from '../NotFound/NotFound'


function mockGetFromServer(categoryid)
{
    return new Promise((resolve, reject) => {
        window.setTimeout( () => {
            const listaFiltrada = (categoryid ? listaDeProductos.filter(producto => producto.category === categoryid.toLowerCase()) : listaDeProductos)
            if (!listaFiltrada.length) reject()
            resolve(listaFiltrada)
        }, 2000)
    })
}


const ItemList = () => {
    const [lista, setLista] = useState([])
    const [noEncontrado, setNoEncontrado] = useState(false)
    const [loading, setLoading] = useState(false)

    let { categoryid } = useParams()

    useEffect( () => {
        setLista([])
        setLoading(true)
        mockGetFromServer(categoryid)
            .then( setLista )
            .catch(() => setNoEncontrado(true))
            .finally(() => setLoading(false))
        return(
            setNoEncontrado(false)
        )
    },[categoryid])

    return (
        <div className='cont-item-list'>
            {loading && <Spinner />}
            {noEncontrado && <NotFound message='No hay productos que mostrar' />}

            {lista && lista.map(producto => <Item key={producto.id} {...producto} />)}
        </div>
    )
}

export default ItemList

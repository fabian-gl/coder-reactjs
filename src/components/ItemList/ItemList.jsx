import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppContext } from '../../context/AppContext'

import './ItemList.css'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner'
import NotFound from '../NotFound/NotFound'


const ItemList = () => {

    const { productos, getAllProducts, loading } = useAppContext();
    const [listaFiltrada, setListaFiltrada] = useState([])

    let { categoryid } = useParams()

    useEffect(() => {
        getAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect( () => {
        filtrarResultados()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[categoryid, productos])

    const filtrarResultados = () => {
        if (categoryid) setListaFiltrada(productos.filter(producto => producto.category === categoryid))
        else setListaFiltrada(productos)
    }

    return (
        <div className='cont-item-list'>
            {loading && <Spinner />}
            {(!listaFiltrada.length && !loading) && <NotFound message='No hay productos que mostrar' />}
            {listaFiltrada.length !== 0 && listaFiltrada.map(producto => <Item key={producto.id} {...producto} />)}
        </div>
    )
}

export default ItemList

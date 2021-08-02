import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppContext } from '../../context/AppContext'

import './ItemList.css'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner'
import NotFound from '../NotFound/NotFound'


const ItemList = () => {

    const { productosFiltrados, getProductosFiltrados, loading, sinResultados } = useAppContext();

    let { categoryid } = useParams()

    useEffect( () => {
        getProductosFiltrados(categoryid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[categoryid])

    return (
        <div className='cont-item-list'>
            {loading && <Spinner />}
            {sinResultados && <NotFound message='No hay productos que mostrar' />}
            {productosFiltrados.length !== 0 && productosFiltrados.map(producto => <Item key={producto.id} {...producto} />)}
        </div>
    )
}

export default ItemList

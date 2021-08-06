import './ItemDetailContainer.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Spinner from '../Spinner/Spinner'
import ItemDetail from '../ItemDetail/ItemDetail'
import NotFound from '../NotFound/NotFound'

import { useAppContext } from '../../context/AppContext'


const ItemDetailContainer = () => {

    const { getAllProducts, productos, loading } = useAppContext();
    const [producto, setProducto] = useState(null)

    let { productid } = useParams()

    useEffect(() => {
        getAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect( () => {
        setProducto(productos.filter(producto => producto.id === productid)[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[productid, productos])

    return (
        <div className='cont-item-detail-container'>
            {loading && <Spinner />}
            {(!producto && !loading)&& <NotFound message='No existe ese producto...' />}
            {producto && <ItemDetail {...producto} />}
        </div>
    )
}

export default ItemDetailContainer

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getProductsByCategory, getProducts } from '../../firebase/queries'
import './ItemList.css'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner'
import NotFound from '../NotFound/NotFound'

const ItemList = () => {

    const [loading, setLoading] = useState(false)
    const [listaFiltrada, setListaFiltrada] = useState([])
    let { categoryid } = useParams()

    useEffect( () => {
        const getProdsAsync = async () => {
            setListaFiltrada([])
            setLoading(true)
            try {
                if (categoryid) setListaFiltrada(await getProductsByCategory(categoryid))
                else setListaFiltrada(await getProducts())
            } catch (error) {
                alert('Hubo un problema al conectarse con la base de datos', error)
            }
            finally {
                setLoading(false)
            }
        }

        getProdsAsync()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[categoryid])

    return (
        <div className='cont-item-list'>
            {loading && <Spinner />}
            {(!listaFiltrada.length && !loading) && <NotFound message='No hay productos que mostrar' />}
            <div className="cont-grid">
                {listaFiltrada.length !== 0 && listaFiltrada.map(producto => <Item key={producto.id} {...producto} />)}
            </div>
        </div>
    )
}

export default ItemList

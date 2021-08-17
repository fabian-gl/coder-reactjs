import './ItemDetailContainer.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Spinner from '../Spinner/Spinner'
import ItemDetail from '../ItemDetail/ItemDetail'
import NotFound from '../NotFound/NotFound'

import { getProductById } from '../../firebase/queries'

const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(false)

    let { productid } = useParams()

    useEffect(() => {
        const getProdAsync = async () => {
            setProducto(null)
            setLoading(true)
            try {
                setProducto(await getProductById(productid))

            } catch (error) {
                alert('Hubo un problema al conectarse con la base de datos', error)
            }
            finally {
                setLoading(false)
            }
        }
        getProdAsync()
    }, [productid])

    return (
        <div className='cont-item-detail-container'>
            { loading ?
                <Spinner />
            :
                (producto ? 
                    <ItemDetail {...producto} />
                :
                    <NotFound message='No existe ese producto...' />
                )
            }
        </div>
    )
}

export default ItemDetailContainer

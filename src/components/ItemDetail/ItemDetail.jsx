import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

import { useCartContext } from '../../context/CartContext'

import { useState } from 'react';
import { useHistory } from 'react-router';

const ItemDetail = ({id, title, description, price, pictureUrl}) => {
    const history = useHistory()

    const rootUrl = window.location.origin
    const rutaImagen = `${rootUrl}/product-pictures/${pictureUrl}`
    const { addItem } = useCartContext();

    const [cantidadAComprar, setCantidadAComprar] = useState(0)

    const agregaAlCarrito = cantidad => {
        setCantidadAComprar(cantidad)
    }

    const terminaLaCompra = () => {
        addItem(id, title, cantidadAComprar)
        history.push('/cart')
    }

    return (
        <div className='cont-item-detail'>
            <h2 className='titulo'>{title}</h2>
            <div className="cont-interno">
                <div className="cont-img">
                    <img src={rutaImagen} alt="" />
                </div>
                <div className="cont-info-contador">
                    <p className="descripcion">{description}</p>
                    <div className="cont-precio-contador">
                        <p className='precio'>${price}</p>

                        {( cantidadAComprar ?
                            <button onClick={terminaLaCompra}>Terminar la compra</button>
                        : 
                            <ItemCount stock={4} onAdd={agregaAlCarrito}/>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

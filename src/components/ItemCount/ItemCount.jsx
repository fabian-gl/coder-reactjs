import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [cantidad, setCantidad] = useState(Math.min(initial, stock))

    const incrementa = () => {
        if (cantidad < stock) setCantidad(cantidad + 1)
    }
    const decrementa = () => {
        if (cantidad > 0) setCantidad(cantidad - 1)
    }
    const agrega = () => {
        if (cantidad && stock) onAdd(cantidad)
    }

    return (
        <div className='cont-contador'>
            <div>
                <div className="fila-contador">
                    <div onClick={decrementa} className="btn-menos">
                        <p>-</p>
                    </div>
                    <div className="cantidad">{cantidad}</div>
                    <div onClick={incrementa} className="btn-mas">
                        <p>+</p>
                    </div>
                </div>
                <button className='btn-agregar' onClick={agrega}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, title, description, price, pictureUrl}) => {
    const rootUrl = window.location.origin
    const rutaImagen = `${rootUrl}/product-pictures/${pictureUrl}`

    const agregaAlCarrito = cantidad => {
        alert(`Se agregan ${cantidad} items al carrito`)
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
                        <ItemCount stock={4} onAdd={agregaAlCarrito}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

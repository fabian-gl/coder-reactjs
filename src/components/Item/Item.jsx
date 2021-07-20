import './Item.css'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, title, description, price, pictureUrl}) => {
    const rootUrl = window.location.origin
    const rutaImagen = `${rootUrl}/product-pictures/${pictureUrl}`

    const agregaAlCarrito = cantidad => {
        console.log(`Se agregan ${cantidad} items al carrito`)
    }
    
    return (
        <div className='cont-item'>
            <h2 className='titulo'>{title}</h2>
            <div className="cont-img">
                <img src={rutaImagen} alt="" />
            </div>
            <p className='precio'>${price}</p>
            <ItemCount stock={4} onAdd={agregaAlCarrito}/>
        </div>
    )
}

export default Item

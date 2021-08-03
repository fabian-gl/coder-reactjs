import './CartItem.css'

import { useCartContext } from '../../context/CartContext'


const CartItem = ({id, title, price, cantidad, pictureUrl}) => {
    const rootUrl = window.location.origin
    const rutaImagen = `${rootUrl}/product-pictures/${pictureUrl}`

    const { deleteItem } = useCartContext();

    return (
        <div className='cont-cart-item'>
            <div className="cont-img">
                <img src={rutaImagen} alt="" />
            </div>
            <div className="cont-info">
                <div className='cont-title'>
                    <div>{title}</div>
                </div>
                <div className='cont-cuenta'>
                    <div>({cantidad} x ${price})</div>
                </div>
                <div className='cont-subtotal'>
                    <div>${cantidad*price}</div>
                </div>
                <div className='cont-btn-delete'>
                    <div className='btn-delete' onClick={() => deleteItem(id)}>&#10006;</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem

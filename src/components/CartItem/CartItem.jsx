import './CartItem.css'

import { useCartContext } from '../../context/CartContext'


const CartItem = ({id, title, cantidad}) => {
    const { deleteItem } = useCartContext();

    return (
        <div className='cont-cart-item'>
            <div>{title}</div>
            <div>{cantidad}</div>
            <div className='btn-delete-item' onClick={() => deleteItem(id)}>&#10006;</div>
        </div>
    )
}

export default CartItem

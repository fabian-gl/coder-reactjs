import './CartContainer.css'

import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem';


const CartContainer = () => {
    const { cartItems } = useCartContext();

    console.log(cartItems)
    return (
        <div className='cont-cart-container'>
            <h1>Soy un carrito vacío</h1>
            {cartItems.map(item =><CartItem key={item.id} {...item}/>)}
        </div>
    )
}

export default CartContainer

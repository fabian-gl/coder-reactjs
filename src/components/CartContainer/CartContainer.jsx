import './CartContainer.css'

import { useCartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem';
import NotFound from '../NotFound/NotFound';


const CartContainer = () => {
    const { cartItems } = useCartContext();

    console.log(cartItems)
    return (
        <div className='cont-cart-container'>
            <h1>Tu carrito!</h1>
            {cartItems.length === 0 && <NotFound message='El carrito está vacío!' />}
            {cartItems.length !== 0 && cartItems.map(item =><CartItem key={item.id} {...item}/>)}
        </div>
    )
}

export default CartContainer

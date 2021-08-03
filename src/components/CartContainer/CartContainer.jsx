import './CartContainer.css'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'

import CartItem from '../CartItem/CartItem';
import NotFound from '../NotFound/NotFound';


const CartContainer = () => {
    const { cartItems } = useCartContext()

    const [total, setTotal] = useState(0)


    useEffect(() => {
        const totalCalculado = cartItems.reduce((acum, act) => acum + act.price * act.cantidad, 0)
        setTotal(totalCalculado)
    }, [cartItems])

    return (
        <div className='cont-cart-container'>
            <h1>Tu carrito!</h1>
            {cartItems.length === 0 && 
            <>
                <NotFound message='El carrito está vacío!' />
                <Link className='link-volver' to='/'>Vuelve a la tienda para agregar algo!</Link>
            </>
            }
            {cartItems.length !== 0 && cartItems.map(item =><CartItem key={item.id} {...item}/>)}
            {total && <h3>Total: ${total}</h3>}
        </div>
    )
}

export default CartContainer

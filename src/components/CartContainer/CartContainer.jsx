import './CartContainer.css'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'
import { setOrder, getFirestoreTimestamp } from '../../firebase/queries';

import CartItem from '../CartItem/CartItem';
import NotFound from '../NotFound/NotFound';
import BuyerForm from '../BuyerForm/BuyerForm';


const CartContainer = () => {
    const { cartItems } = useCartContext()

    const [total, setTotal] = useState(0)

    const handlePurchase = (formData) => {
        const {repeatEmail, ...buyer} = formData 

        const order = {
            buyer,
            items: cartItems.map(item => ({id: item.id, title: item.title, price: item.price})),
            date: getFirestoreTimestamp(),
            total
        }
        console.log(order)
        setOrder(order)
        .then(response => alert(`Gracias por tu compra! El ID de tu orden es ${response.id}`))
        .catch(error => alert(`Ocurrió un error: ${error}`))
    }

    useEffect(() => {
        const totalCalculado = cartItems.reduce((acum, act) => acum + act.price * act.cantidad, 0)
        setTotal(totalCalculado)
    }, [cartItems])

    return (
        <div className='cont-cart-container'>
            <h1>Tu carrito!</h1>
            {!cartItems.length && 
            <>
                <NotFound message='El carrito está vacío!' />
                <Link className='link-volver' to='/'>Vuelve a la tienda para agregar algo!</Link>
            </>
            }
            <div className={'cont-cart-item-list'}>
                {!!cartItems.length && cartItems.map(item =><CartItem key={item.id} {...item}/>)}
            </div>

            {!!total && (
                <>
                    <h3 className='total'>Total: ${total}</h3>
                    <BuyerForm inputsValidated={handlePurchase}/>
                </>)}
            
        </div>
    )
}

export default CartContainer

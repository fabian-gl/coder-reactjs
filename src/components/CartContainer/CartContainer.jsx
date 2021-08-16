import './CartContainer.css'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'
import { setOrder, getFirestoreTimestamp } from '../../firebase/queries';

import CartItem from '../CartItem/CartItem';
import NotFound from '../NotFound/NotFound';
import BuyerForm from '../BuyerForm/BuyerForm';
import SuccessfulPurchase from '../SuccessfulPurchase/SuccessfulPurchase';


const CartContainer = () => {
    const { cartItems, clearItems } = useCartContext()

    const [total, setTotal] = useState(0)
    const [idCompra, setIdCompra] = useState('')

    const handlePurchase = (formData) => {
        const {repeatEmail, ...buyer} = formData 

        const order = {
            buyer,
            items: cartItems.map(item => ({id: item.id, title: item.title, price: item.price, quantity: item.cantidad })),
            date: getFirestoreTimestamp(),
            total
        }
        console.log(order)
        setOrder(order)
        .then(response => {
            setIdCompra(response.id)
            console.log(`Gracias por tu compra! El ID de tu orden es ${response.id}`)
            clearItems()
        })
        .catch(error => alert(`Ocurrió un error: ${error}`))
    }

    useEffect(() => {
        const totalCalculado = cartItems.reduce((acum, act) => acum + act.price * act.cantidad, 0)
        setTotal(totalCalculado)
    }, [cartItems])

    console.log(idCompra)
    return (
        <div className='cont-cart-container'>
            {!idCompra && <h1>Tu carrito!</h1>}

            {cartItems.length === 0 ?
                <>
                    {idCompra ?
                        <SuccessfulPurchase purchaseId={idCompra} />
                    :
                        <NotFound message='El carrito está vacío!' />
                    }
                    <Link className='link-volver' to='/'>Vuelve a la tienda</Link>
                </>
            :
                <>
                    { cartItems.map(item =><CartItem key={item.id} {...item}/>)}
                    <h3 className='total'>Total: ${total}</h3>
                    
                    <BuyerForm inputsValidated={handlePurchase}/>
                </>            
            }
            
        </div>
    )
}

export default CartContainer

import './CartContainer.css'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { useCartContext } from '../../context/CartContext'
import { setOrder, getFirestoreTimestamp } from '../../firebase/queries';

import CartItem from '../CartItem/CartItem';
import NotFound from '../NotFound/NotFound';
import BuyerForm from '../BuyerForm/BuyerForm';
import SuccessfulPurchase from '../SuccessfulPurchase/SuccessfulPurchase';
import Spinner from '../Spinner/Spinner';


const CartContainer = () => {
    const { cartItems, clearItems } = useCartContext()

    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const [idCompra, setIdCompra] = useState('')

    const handlePurchase = (formData) => {
        const {repeatEmail, ...buyer} = formData 

        const order = {
            buyer,
            items: cartItems.map(item => ({id: item.id, title: item.title, price: item.price, quantity: item.cantidad })),
            date: getFirestoreTimestamp(),
            total
        }
        setLoading(true)
        setOrder(order)
        .then(response => {
            setIdCompra(response.id)
            clearItems()
        })
        .catch(error => alert(`Ocurrió un error: ${error}`))
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        const totalCalculado = cartItems.reduce((acum, act) => acum + act.price * act.cantidad, 0)
        setTotal(totalCalculado)
    }, [cartItems])

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
                    { loading ? 
                        <Spinner />
                        :
                        <>
                            { cartItems.map(item =><CartItem key={item.id} {...item}/>)}
                            <h3 className='total'>Total: ${total}</h3>
                            <BuyerForm inputsValidated={handlePurchase}/>
                        </>
                    }
                </>          
            }
            
        </div>
    )
}

export default CartContainer

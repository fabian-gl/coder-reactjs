import './CartItem.css'

const CartItem = ({id, cantidad}) => {
    return (
        <div className='cont-cart-item'>
            <div>{id}</div>
            <div>{cantidad}</div>
        </div>
    )
}

export default CartItem

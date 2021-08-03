import './CartWidget.css'
import cartIcon from '../../assets/icon-cart.png'
import { useCartContext } from '../../context/CartContext'

import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cartItems } = useCartContext();

    const numItems = cartItems.reduce((acum, act) => acum + act.cantidad, 0)
    return (
        <Link to='/cart'>
            {numItems !== 0 &&
            <div className='cont-cart'>
                <img src={cartIcon} alt="" />
                <div>
                    <p>{numItems}</p>
                </div>
            </div>
            }
        </Link>
    )
}

export default CartWidget

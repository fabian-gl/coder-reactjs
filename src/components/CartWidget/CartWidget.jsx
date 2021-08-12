import './CartWidget.css'

import cartIcon from '../../assets/icon-cart.png'
import { useCartContext } from '../../context/CartContext'

import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { numItems } = useCartContext();

    return (
        <Link to='/cart'>
            <div className='cont-cart'>
                <img src={cartIcon} alt="" />
                <div>
                    <p>{numItems}</p>
                </div>
            </div>
        </Link>
    )
}

export default CartWidget

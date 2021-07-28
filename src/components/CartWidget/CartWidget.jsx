import './CartWidget.css'
import cartIcon from '../../assets/icon-cart.png'

import { Link } from 'react-router-dom'
const CartWidget = () => {
    const numItems = 10
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

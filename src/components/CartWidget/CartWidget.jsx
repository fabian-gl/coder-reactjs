import './CartWidget.css'
import cartIcon from '../../assets/icon-cart.png'

const CartWidget = () => {
    const numItems = 10
    return (
        <div className='cont-cart'>
            <img src={cartIcon} alt="" />
            <div>
                <p>{numItems}</p>
            </div>
        </div>
    )
}

export default CartWidget

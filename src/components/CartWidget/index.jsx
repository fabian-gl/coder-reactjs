import './index.css'
import cartIcon from '../../assets/icon-cart.png'

const index = () => {
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

export default index

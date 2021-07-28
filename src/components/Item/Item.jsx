import './Item.css'

import { Link } from 'react-router-dom'

const Item = ({id, title, price, pictureUrl}) => {
    const rootUrl = window.location.origin
    const rutaImagen = `${rootUrl}/product-pictures/${pictureUrl}`

    return (
        <Link className='no-decoration' to={`/details/${id}`}>
            <div className='cont-item'>
                <h2 className='titulo'>{title}</h2>
                <div className="cont-img">
                    <img src={rutaImagen} alt="" />
                </div>
                <p className='precio'>${price}</p>
            </div>
        </Link>
    )
}

export default Item
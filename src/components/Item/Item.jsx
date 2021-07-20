import './Item.css'

const Item = ({id, title, description, price, pictureUrl}) => {
    const rootUrl = window.location.origin
    const rutaImagen = `${rootUrl}/product-pictures/${pictureUrl}`

    return (
        <div className='cont-item'>
            <h2 className='titulo'>{title}</h2>
            <div className="cont-img">
                <img src={rutaImagen} alt="" />
            </div>
            <p className='precio'>${price}</p>
        </div>
    )
}

export default Item
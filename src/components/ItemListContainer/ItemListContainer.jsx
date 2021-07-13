import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';


const index = ({greeting}) => {
    const agregaAlCarrito = cantidad => {
        console.log(`Se agregan ${cantidad} items al carrito`)
    }
    return (
        <div className='centra-elementos'>
            <h1 className='saludo'>{greeting}</h1>
            <div className="cont-prueba">
                <ItemCount stock={4} onAdd={agregaAlCarrito}/>
            </div>
        </div>
    )
}

export default index

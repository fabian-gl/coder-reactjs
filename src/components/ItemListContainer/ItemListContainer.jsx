import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';


const index = ({greeting}) => {

    return (
        <div className='centra-elementos'>
            <h1 className='saludo'>{greeting}</h1>
            <div className="cont-prueba">
                <ItemList />
            </div>
        </div>
    )
}

export default index

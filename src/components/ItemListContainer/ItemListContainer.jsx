import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';


const index = ({greeting='Productos para su satisfacción'}) => {

    return (
        <div className='cont-item-list-container'>
            <h1 className='greeting'>{greeting}</h1>
            <ItemList />
        </div>
    )
}

export default index

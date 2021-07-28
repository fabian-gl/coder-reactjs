import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';


const index = ({greeting}) => {

    return (
        <div className='cont-item-list-container'>
            <h1 className='greeting'>{greeting}</h1>
            <ItemList />
        </div>
    )
}

export default index

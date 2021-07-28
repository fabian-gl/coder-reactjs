import './NavBarItem.css'

import { NavLink } from 'react-router-dom'
const NavBarItem = ({nombre}) => {
    return (
        <NavLink activeClassName='nav-item-selected' className='no-decoration' to={`/category/${nombre.toLowerCase()}`}>
            <div className="boton-navbar">
                {nombre}
            </div>
        </NavLink>
    )
}

export default NavBarItem

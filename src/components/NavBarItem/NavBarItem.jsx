import './NavBarItem.css'

import { NavLink } from 'react-router-dom'
const NavBarItem = ({nombre, onClick}) => {
    return (
        <NavLink onClick={onClick} activeClassName='selected' className='boton-navbar no-decoration' to={`/category/${nombre.toLowerCase()}`}>
            {nombre}
        </NavLink>
    )
}

export default NavBarItem

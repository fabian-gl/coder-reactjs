import React from 'react'

import './NavBar.css'
import logo from '../../assets/icon-lampara.png'
import NavBarItem from '../NavBarItem/NavBarItem'

const NavBar = () => {
    const menu = ['Prueba 1', 'Prueba 2', 'Prueba 3' , 'Prueba 4']
    return (
        <div className='cont-navbar'>
            <div className="cont-logo">
                <img src={logo} alt="" title='A reemplazar con mi logo'/>
            </div>
            <div className="cont-botones">
                { menu.map(elem => <NavBarItem nombre={elem}/>) }
            </div>
        </div>
    )
}

export default NavBar

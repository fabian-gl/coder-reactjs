import './NavBar.css'

import NavBarItem from '../NavBarItem/NavBarItem'
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'

import { useState, useEffect } from 'react'
import { useCartContext } from '../../context/CartContext'


const NavBar = () => {
    const { cartItems } = useCartContext()

    const menu = ['CUERDA', 'VIENTO', 'PERCUSION']

    const [numItems, setNumItems] = useState(0)

    useEffect(() => {
        setNumItems(cartItems.reduce((acum, act) => acum + act.cantidad, 0))
    }, [cartItems])

    const toggleMenuCelu = () => document.querySelector('.menu-celu').classList.toggle('oculto')

    const closeMenu = () => {
        document.querySelector('.cont-navbar .cont-hamburger input').click()
    }

    return (
        <nav className='cont-navbar'>
            <div className="fila-nav-sup">

                <div className="cont-izquierdo">
                    <Logo />
                </div>
                <div className="cont-medio">
                    <div className="cont-botones">
                        { menu.map((elem, index) => <NavBarItem nombre={elem} key={index}/>) }
                    </div>
                    <div className="cont-hamburger">
                        <div className="menu-wrap">
                            <input onClick={toggleMenuCelu} type="checkbox" className="toggler" />
                            <div className="hamburger"><div></div></div>

                        </div>
                    </div>

                </div>
                <div className="cont-derecho">
                    <CartWidget numItems={numItems} />
                </div>
            </div>
            <div>
                <div className="menu-celu oculto">
                    { menu.map((elem, index) => <NavBarItem onClick={closeMenu} nombre={elem} key={index}/>) }
                </div>
            </div>
            
        </nav>
    )
}

export default NavBar

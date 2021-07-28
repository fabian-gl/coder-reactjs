import './NavBar.css'

import NavBarItem from '../NavBarItem/NavBarItem'
import Logo from '../Logo/Logo'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    const menu = ['CUERDA', 'VIENTO', 'PERCUSION']

    const toggleMenuCelu = () => document.querySelector('.menu-celu').classList.toggle('oculto')

    return (
        <div className='cont-navbar'>
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
                    <CartWidget />
                </div>
            </div>
            <div>
                <div className="menu-celu oculto">
                    { menu.map((elem, index) => <NavBarItem nombre={elem} key={index}/>) }
                </div>
            </div>
            
        </div>
    )
}

export default NavBar

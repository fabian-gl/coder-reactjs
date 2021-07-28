import './Logo.css'
import logoImg from '../../assets/icon-musica.png'

import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link className='no-decoration' to='/'>
            <div className='cont-logo'>
                <img src={logoImg} alt="Sonora Logo" />
                <h2>SONORA</h2>
            </div>
        </Link>
    )
}

export default Logo

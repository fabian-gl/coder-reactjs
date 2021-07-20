import './Logo.css'
import logoImg from '../../assets/icon-musica.png'

const Logo = () => {
    return (
        <div className='cont-logo'>
            <img src={logoImg} alt="Sonora Logo" />
            <h2>SONORA</h2>
        </div>
    )
}

export default Logo

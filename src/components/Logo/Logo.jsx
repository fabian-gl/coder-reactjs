import './Logo.css'
import logoImg from '../../assets/icon-lampara.png'

const Logo = () => {
    return (
        <div className='cont-logo'>
            <img src={logoImg} alt="Sonora Logo" />
            <h2>Sonora</h2>
        </div>
    )
}

export default Logo

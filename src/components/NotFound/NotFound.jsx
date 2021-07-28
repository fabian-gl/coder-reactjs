import './NotFound.css'

import notFoundLogo from '../../assets/not-found.png'

const NotFound = ({message=''}) => {
    return (
        <div className='cont-not-found'>
            <img src={notFoundLogo} alt="" />
            <h2>{message}</h2>
        </div>
    )
}

export default NotFound

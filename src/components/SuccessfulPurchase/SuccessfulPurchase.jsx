import './SuccessfulPurchase.css'
import greenTick from '../../assets/green-tick.png'

const SuccessfulPurchase = ({purchaseId}) => {
    return (
        <div className='cont-successful-purchase'>
            <h2>Gracias por tu compra!</h2>
            <img src={greenTick} alt="" />
            <h4>Tu número de orden es <b>{purchaseId}</b></h4>
            <h4>Tu pedido llegará a tu casa en 5 días hábiles!</h4>
        </div>
    )
}

export default SuccessfulPurchase

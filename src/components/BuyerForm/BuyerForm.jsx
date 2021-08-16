import './BuyerForm.css'

import { useState, useEffect } from 'react'

const BuyerForm = ({inputsValidated}) => {

    const emptyObject = {
        name: '',
        phone: '',
        email: '',
        repeatEmail: ''
    }

    const [formData, setFormData] = useState({...emptyObject})

    const [btnEnabled, setBtnEnabled] = useState(false)

    const [validationErrors, setValidationErrors] = useState({...emptyObject})

    const [showingErrors, setShowingErrors] = useState(false)

    useEffect(() => {

        setBtnEnabled(validateInputs())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData])

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handlePurchase = () => {

        if (validateInputs()) inputsValidated({...formData, phone: stripNonNumericChars(formData.phone)})
        else setShowingErrors(true)
    }

    const stripNonNumericChars = phone => phone.replace(/\D/g, '')

    const validateInputs = () => {

        const validationObject = {...emptyObject}

        // Name
        if (!formData.name.length) validationObject.name = 'El nombre es obligatorio'
        else if (formData.name.length < 2) validationObject.name = 'Ingresa al menos 2 caracteres'

        // Phone
        const arrayNumeros = formData.phone.match(/\d/g) || []
        const cantidadNumeros = arrayNumeros.length

        if (!formData.phone.length) validationObject.phone = 'El teléfono es obligatorio'
        else if (cantidadNumeros < 8 || cantidadNumeros > 13)  validationObject.phone = 'El teléfono debe tener entre 8 y 13 dígitos'

        // Email
        const re = /\S+@\S+\.\S+/
        if (!formData.email.length) validationObject.email = 'El email es obligatorio'
        else if (!re.test(formData.email)) validationObject.email = 'El mail ingresado no es válido'
        
        if (formData.email !== formData.repeatEmail) validationObject.repeatEmail = 'Los mails ingresados no coinciden'
        
        setValidationErrors(validationObject)

        // Check if any field is not valid
        for (const key in validationObject) if (validationObject[key]) return false
        return true
    }

    const onlyPhoneChars = e => {
        const key = e.key.toUpperCase()
        const allowedKeys = ['DELETE', 'BACKSPACE', 'ARROWLEFT', 'ARROWRIGHT' ]
        const phoneChars = new RegExp(/\d|\.|-|\(|\)/)

        if( (!allowedKeys.includes(key)) && (!phoneChars.test(e.key))) e.preventDefault()
    }

    return (
        <div className="cont-buyer-form">
            <h2>Completa tus datos para finalizar tu compra</h2>
            <form className='buyer-form' onChange={handleChange}>

                <div className="cont-input">
                    <input type="text" name="name" onChange={() => {}}
                        placeholder='Nombre' value={formData.name} />
                    {(showingErrors && validationErrors['name']) &&
                        <div className="validation-error">{validationErrors['name']}</div>}
                </div>

                <div className="cont-input">
                    <input type="tel" name="phone" pattern="[0-9]*" onKeyDown={onlyPhoneChars} onChange={() => {}}
                        placeholder='Telefono' value={formData.phone} />
                    {(showingErrors && validationErrors['phone']) &&
                        <div className="validation-error">{validationErrors['phone']}</div>}
                </div>

                <div className="cont-input">
                    <input type="email" name="email" onChange={() => {}}
                        placeholder='Email' value={formData.email} />
                    {(showingErrors && validationErrors['email']) &&
                        <div className="validation-error">{validationErrors['email']}</div>}
                </div>
                
                <div className="cont-input">
                    <input type="email" name="repeatEmail" onChange={() => {}}
                        placeholder='Repite tu email' value={formData.repeatEmail} />
                    {(showingErrors && validationErrors['repeatEmail']) &&
                        <div className="validation-error">{validationErrors['repeatEmail']}</div>}
                </div>

            </form>            
            <button className={`btn-compra ${btnEnabled && 'enabled'}`} onClick={handlePurchase}>Termina la compra</button>
        </div>
    )
}

export default BuyerForm

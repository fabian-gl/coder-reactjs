import './BuyerForm.css'

import { useState, useEffect } from 'react'

const BuyerForm = ({inputsValidated}) => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        repeatEmail: ''
    })

    const [btnEnabled, setBtnEnabled] = useState(false)

    useEffect(() => {
        setBtnEnabled(validateInputs().valid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData])

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handlePurchase = () => {
        const validationResult = validateInputs()

        if (validationResult.valid) inputsValidated({...formData, phone: stripNonNumericChars(formData.phone)})
        else {
            const msgErrors = validationResult.messages.reduce((acum, act) => acum + `• ${act}\n`, '')
            alert(msgErrors)
        }
    }

    const stripNonNumericChars = phone => phone.replace(/\D/g, '')

    const validateInputs = () => {
        const messages = []

        // Name
        if (!formData.name.length)
            messages.push('El nombre es obligatorio.')
        else if (formData.name.length < 2)
            messages.push('El nombre debe tener al menos 2 caracteres.')
    
        // Phone
        const arrayNumeros = formData.phone.match(/\d/g) || []
        const cantidadNumeros = arrayNumeros.length

        if (!formData.phone.length)
            messages.push('El teléfono es obligatorio.')
        else if (cantidadNumeros < 8 || cantidadNumeros > 13)
            messages.push('El teléfono no tiene la cantidad de números necesarios (entre 8 y 13).')

        // Email
        const re = /\S+@\S+\.\S+/
        if (!formData.email.length)
            messages.push('El email es obligatorio.')
        else if (!re.test(formData.email))
            messages.push('El mail ingresado no es válido.')
        
        if (formData.email !== formData.repeatEmail)
            messages.push('Los mails ingresados no coinciden.')
        
        return {valid: !messages.length, messages}
    }

    const onlyPhoneChars = e => {
        const key = e.key.toUpperCase()
        if (key === 'DELETE' || key === 'BACKSPACE') return
        if(!/\d|\.|-/.test(e.key)) e.preventDefault()
    }

    return (
        <div className="cont-buyer-form">
            <h2>Completa tus datos para finalizar tu compra</h2>
            <form className='buyer-form' onChange={handleChange}>

                <input type="text" name="name" onChange={() => {}}
                    placeholder='Nombre' value={formData.name} />

                <input type="tel" name="phone" pattern="[0-9]*" onKeyDown={onlyPhoneChars} onChange={() => {}}
                    placeholder='Telefono' value={formData.phone} />

                <input type="email" name="email" onChange={() => {}}
                    placeholder='Email' value={formData.email} />

                <input type="email" name="repeatEmail" onChange={() => {}}
                    placeholder='Repite tu email' value={formData.repeatEmail} />  

            </form>            
            <button className={`btn-compra ${btnEnabled && 'enabled'}`} onClick={handlePurchase}>Termina la compra</button>
        </div>

    )
}

export default BuyerForm

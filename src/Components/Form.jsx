import { useState } from 'react'
import './Form.css'

const Form = ({ onSubmitContactInfo }) => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
  })
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(isValidName() && isValidEmail())) {
      setError(true)
      return
    }

    setError(false)
    if (typeof onSubmitContactInfo === 'function')
      onSubmitContactInfo(
        `Gracias ${contactInfo.name}, te contactaremos cuando antes vía mail`
      )
    console.log('Contacto Info', contactInfo)
  }

  const isValidName = () => {
    const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]{5,}$/
    return nameRegex.test(contactInfo.name)
  }

  const isValidEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(contactInfo.email)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-info">
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={contactInfo.name}
          onChange={(e) =>
            setContactInfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={contactInfo.email}
          onChange={(e) =>
            setContactInfo((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <h3>Por favor verifique su información nuevamente</h3>}
    </div>
  )
}

export default Form

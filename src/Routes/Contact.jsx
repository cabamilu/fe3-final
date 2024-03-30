import { useState } from 'react'
import React from 'react'
import Form from '../Components/Form'
import Alert from '../Components/Alert'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

/*
 * Profe: El estilo dark/light lo dejé de manera global en el componente Layout
 */

const Contact = () => {
  const [message, setMessage] = useState()

  const onSubmitContactInfo = (message) => {
    setMessage(message)
  }

  const onClosedAlert = () => {
    setMessage(undefined)
  }

  return (
    <main>
      <h2>Quieres saber más?</h2>
      <p>Envíanos tus preguntas y te contactaremos</p>
      <Form onSubmitContactInfo={onSubmitContactInfo} />
      {message && <Alert message={message} onClosed={onClosedAlert} />}
    </main>
  )
}

export default Contact

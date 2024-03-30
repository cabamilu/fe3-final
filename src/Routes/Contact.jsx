import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

/*
* Profe: El estilo dark/light lo dejé de manera global en el componente Layout
*/

const Contact = () => {
  return (
    <main>
      <h2>Quieres saber más?</h2>
      <p>Envíanos tus preguntas y te contactaremos</p>
      <Form />
    </main>
  )
}

export default Contact

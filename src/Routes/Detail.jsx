import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDentistById } from '../Api/dentists'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

/*
* Profe: El estilo dark/light lo dejé de manera global en el componente Layout
*/

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams()
  const [dentistSelected, setDentistSelected] = useState({})
  const [dentist] = getDentistById(id)

  useEffect(() => {
    setDentistSelected(dentist)
  }, [dentist])

  return (
    <main>
      <h1>Detalle Odontólogo id {dentistSelected.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>email</th>
            <th>Teléfono</th>
            <th>Sitio web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentistSelected.name}</td>
            <td>{dentistSelected.email}</td>
            <td>{dentistSelected.phone}</td>
            <td>{dentistSelected.website}</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default Detail

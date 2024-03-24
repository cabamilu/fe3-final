import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDentistById } from "../Api/dentists"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams()
  const [dentistSelected, setDentistSelected] = useState({})

  useEffect(() => {
      const getDetail = async () => {
          const dentistDetail = await getDentistById(id)
          setDentistSelected(dentistDetail)
      }

      getDetail()
  }, [id])

  return (
    <main>
      <h1>Detail Dentist id {dentistSelected.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tr>
          <th>Nombre</th>
          <th>email</th>
          <th>Teléfono</th>
          <th>Sitio web</th>
        </tr>
        <tr>
          <td>{dentistSelected.name}</td>
          <td>{dentistSelected.email}</td>
          <td>{dentistSelected.phone}</td>
          <td>{dentistSelected.website}</td>
        </tr>
      </table>
    </main>
  )
}

export default Detail
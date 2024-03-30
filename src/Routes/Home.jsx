import { useEffect } from 'react'
import { useAppStates } from '../Components/utils/global.context'
import { getDentists } from '../Api/dentists'
import { actions } from '../Components/utils/Actions'
import Card from '../Components/Card'
import Alert from '../Components/Alert'
import { useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

/*
 * Profe: El estilo dark/light lo dejé de manera global en el componente Layout
 */

const Home = () => {
  const { state, dispatch } = useAppStates()
  const [dentists] = getDentists()
  const [message, setMessage] = useState()

  const onAddedToFavs = (message) => {
    setMessage(message)
  }

  const onClosedAlert = () => {
    setMessage(undefined)
  }

  useEffect(() => {
    dispatch({ type: actions.UPDATE_DENTISTS, payload: dentists })
  }, [dentists])

  return (
    <main>
      <h1>Inicio</h1>
      <div className="dentists-container">
        {/* Aqui deberias renderizar las cards */}
        {state.dentists?.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
            onAddedToFavs={onAddedToFavs}
          />
        ))}
      </div>
      {message && <Alert message={message} onClosed={onClosedAlert} />}
    </main>
  )
}

export default Home

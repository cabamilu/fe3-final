import { useEffect } from 'react'
import { useAppStates } from '../components/utils/global.context'
import { getDentists } from '../api/dentists'
import { actions } from '../components/utils/Actions'
import Card from '../components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// Profe: El estilo dark/light lo dejé de manera global en el componente Layout

const Home = () => {
  const { state, dispatch } = useAppStates()
  const [dentists] = getDentists();
  
  useEffect(() => {
    dispatch({type: actions.UPDATE_DENTISTS, payload: dentists})
  }, [dentists])

  return (
    <main>
      <h1>Inicio</h1>
      <div className='dentists-container'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentists?.map((dentist) => 
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} /> 
        )}
      </div>
    </main>
  )
}

export default Home
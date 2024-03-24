import { useAppStates } from '../Components/utils/global.context'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useAppStates()

  return (
    <main className="" >
      <h1>Home</h1>
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
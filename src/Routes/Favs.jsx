import Card from '../Components/Card'
import { useAppStates } from '../Components/utils/global.context'
import Trash from '../Components/Trash'
import { actions } from '../Components/utils/Actions'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

/*
* Profe: El estilo dark/light lo dejé de manera global en el componente Layout
*/

const Favs = () => {
  const { state, dispatch } = useAppStates()

  return (
    <main>
      <h1>Favoritos</h1>
      <div className="dentists-container">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs?.map((fav) => (
          <Card
            key={fav.id}
            name={fav.name}
            username={fav.username}
            id={fav.id}
            isFavorite={true}
          />
        ))}
      </div>
      {state.favs?.length > 0 && (
        <button
          onClick={() => dispatch({ type: actions.REMOVE_FAVORITES_ALL })}
        >
          <Trash />
        </button>
      )}
    </main>
  )
}

export default Favs

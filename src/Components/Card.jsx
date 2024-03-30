import { Link } from 'react-router-dom'
import { useAppStates } from './utils/global.context'
import Star from './Star'
import Trash from './Trash'
import { actions } from './utils/Actions'
import './Card.css'

const Card = ({ name, username, id, isFavorite, onAddedToFavs }) => {
  const { state, dispatch } = useAppStates()

  const updateFavs = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (isFavorite) {
      dispatch({ type: actions.REMOVE_FAVORITE, payload: id })
      return
    }

    dispatch({ type: actions.ADD_FAVORITE, payload: { id, username, name } })

    typeof onAddedToFavs === 'function' && onAddedToFavs('Agregado a Favoritos')
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <img src="./images/doctor.jpg" alt="" />
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
      </Link>
      <h4>{username}</h4>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        onClick={updateFavs}
        className={state.darkMode ? 'fav-button-dark' : 'fav-button'}
      >
        {isFavorite ? <Trash /> : <Star />}
      </button>
    </div>
  )
}

export default Card

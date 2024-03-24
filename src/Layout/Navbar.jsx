import { useAppStates } from '../Components/utils/global.context'
import { actions } from '../Components/utils/Actions'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Sun from './Sun'
import Moon from './Moon'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useAppStates()

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div>
        <Link to="/home">Inicio</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/favs">Destacados</Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className={`${state.darkMode ? 'theme-button-dark' : 'theme-button'}`} onClick={() => dispatch({type: actions.TOGGLE_MODE})}>
        {state.darkMode ? <Sun />: <Moon />  }
      </button>
    </nav>
  )
}

export default Navbar
import { useAppStates } from '../components/utils/global.context'
import { actions } from '../components/utils/Actions'
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
      <h2>DH Odonto</h2>
      <div>
        <div>
          <Link to="/home">Inicio</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/favs">Destacados</Link>
        </div>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button className="theme-button" onClick={() => dispatch({type: actions.TOGGLE_MODE})}>
          {state.darkMode ? <Sun />: <Moon />  }
        </button>
      </div>
    </nav>
  )
}

export default Navbar
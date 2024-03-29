import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useAppStates } from '../components/utils/global.context'
import './Layout.css'

/*
* Profe: El estilo dark/light lo dejé de manera global en este component
* En el css se maneja el estilo según la clase sea theme-dark o theme-light
*/

export const Layout = () => {
    const { state } = useAppStates()

    return (
        <div className={state.darkMode ? 'theme-dark' : 'theme-light'}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

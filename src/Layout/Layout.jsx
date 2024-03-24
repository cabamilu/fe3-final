import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useAppStates } from '../Components/utils/global.context'
import './Layout.css'

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

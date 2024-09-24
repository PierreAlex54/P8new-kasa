import { NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
import "./index.scss"

function Header() {
  return (
    <nav className='navbar'>
        <div className='navLogo'>
            <img className= 'navLogoImg' src={logo} alt="logo Kasa" />
        </div>
        <NavLink to={'/'}
        className={({ isActive }) => isActive ? 'active-link' : undefined}
        >Accueil</NavLink>
        <NavLink to={'/about'}
        className={({ isActive }) => isActive ? 'active-link' : undefined}
        >À propos</NavLink>
    </nav> 
 )
}

export default Header
import { NavLink } from "react-router-dom"
import "./index.scss";

function Error404() {
    return (
        <div className="errorDiv">
            <p className="errorCode">404</p>
            <p className="errorMsg">Oups! La page que vous demandez n’existe pas.</p>
            <NavLink to={'/'}>Retourner sur la page d’accueil</NavLink>
        </div>
    )
}

export default Error404
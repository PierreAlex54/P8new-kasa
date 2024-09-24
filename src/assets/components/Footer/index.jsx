import logoFooter from "../../../assets/logoFooter.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./index.scss"


function footer() {
  return (
    <footer className="footer">
            <img className="logoFooter" src={logoFooter} alt="logo Kasa footer" />
            <p className="footerText">
        <FontAwesomeIcon icon={faCopyright} /> 2020 Kasa. All rights reserved
      </p>
        </footer>
  )
}

export default footer
import imgBanAbout from "../../../assets/imgBannerAbout.png"
import Banner from "../../components/Banner"
import Header from "../../components/Header"
import Collapse from '../../components/Collapse';
import Footer from "../../components/Footer";
import "./index.scss"


function apropos() {
  return (
<div className="mainContainer">
<div><Header /></div>
<div><Banner bgImage={imgBanAbout} showOverlay={false} /></div>
<div className="collapseContainer">
      <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
      <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <Collapse title="Service" content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." />
      <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique de nos hôtes." />
    </div>
<div><Footer /></div>
</div>
)
}

export default apropos
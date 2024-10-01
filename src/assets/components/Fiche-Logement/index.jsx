import { useParams, Navigate } from "react-router-dom";
import Carousel from "../Carousel";
import Tags from "../Tags";
import HostProfile from "../Host-Profile";
import Rating from "../Rating";
import Collapse from "../Collapse";
import data from "../../data.json";
import "./index.scss";

function FicheLogement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="*" />;
  }

  return (
    <div className="ficheContainer">
      <div>
        <Carousel pictures={logement.pictures} />
      </div>
      <div className="locMainInfo">
        <div className="titleLocTag">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className="hostRating">
          <div className="host">
            <HostProfile host={logement.host} />
          </div>
          <div className="rate">
            <Rating rating={Number(logement.rating)} />
          </div>
        </div>
      </div>
      <div className="collapseLogement">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default FicheLogement;

import RentCard from "../RentCard";
import data from "../../data.json"; // Importer les données JSON
import "./index.scss";

function RentGrid() {
  return (
    <div className="gridContainer">
      {data.map(logement => (
        <RentCard 
          key={logement.id} 
          id={logement.id} 
          title={logement.title} 
          cover={logement.cover} 
        />
      ))}
    </div>
  );
}

export default RentGrid;
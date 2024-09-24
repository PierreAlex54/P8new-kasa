import RentCard from "../RentCard";
import data from "../../data.json"; // Importer les données JSON
import "./index.scss";

function RentGrid() {
  return (
    <div className="gridContainer">
      {data.map((item) => (
        <RentCard key={item.id} title={item.title} cover={item.cover} />
      ))}
    </div>
  );
}

export default RentGrid;
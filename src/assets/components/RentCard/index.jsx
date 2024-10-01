import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

function RentCard({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`}>
      <div className="cardContainer">
        <img src={cover} alt={title} className="cardImage" />
        <h3 className="cardTitle">{title}</h3>
      </div>
    </Link>
  );
}

RentCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default RentCard;

// import { Link } from 'react-router-dom';
// import './index.scss';

// function RentCard({ id, title, cover }) {
//   return (
//     <Link to={`/logement/${id}`} className="cardContainer">
//       <div className="cardImage">
//         <img src={cover} alt={title} />
//       </div>
//       <h3 className="cardTitle">{title}</h3>
//     </Link>
//   );
// }

// export default RentCard;

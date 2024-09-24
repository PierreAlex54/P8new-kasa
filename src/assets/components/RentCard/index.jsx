import PropTypes from "prop-types";
import "./index.scss";

function RentCard({ title, cover }) {
  return (
    <div className="cardContainer">
      <img src={cover} alt={title} className="cardImage" />
      <h3 className="cardTitle">{title}</h3>
    </div>
  );
}

RentCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default RentCard;
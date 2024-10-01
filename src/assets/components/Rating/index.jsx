import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

function Rating({ rating }) {
  const maxRating = 5;
  const stars = Array.from({ length: maxRating }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={index < rating ? 'filled' : 'empty'}
    />
  ));

  return <div className="rating">{stars}</div>;
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
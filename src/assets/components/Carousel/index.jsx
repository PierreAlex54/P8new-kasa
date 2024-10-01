import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './index.scss';

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImg = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <button className="chevron prev" onClick={prevImg}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      <img src={pictures[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
      {pictures.length > 1 && (
        <>
          <button className="chevron next" onClick={nextImg}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="counter">{`${currentIndex + 1}/${pictures.length}`}</div>
        </>
      )}
    </div>
  );
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
import PropTypes from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapseHeader" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <FontAwesomeIcon 
          icon={faChevronUp} 
          className={isOpen ? "rotate" : ""} 
        />
      </div>
      <div className={`collapseContent ${isOpen ? "open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired, 
    content: PropTypes.string.isRequired 
  };

export default Collapse;
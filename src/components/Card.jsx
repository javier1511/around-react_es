import React from "react";

import trashButton from "../images/Trash.svg";
import heartImage from "../images/heart-min.svg";

const Card = (props) => {
  function handleCardClick() {
    props.onOpenImage(props);
  }
  return (
    <>
      <div className="cards__container">
        <div className="sites__picture-container">
          <img
            src={trashButton}
            alt="yosemite-imagen-vista"
            className="sites__trash-icon"
          />
          <img
            src={props.link}
            alt=""
            className="sites__picture"
            onClick={handleCardClick}
          />
        </div>
        <div className="sites__description-container">
          <p className="sites__description-text">{props.name}</p>
          <div className="like__container">
            <img
              src={heartImage}
              alt="me-gusta-imagen"
              className="sites__description-icon"
            />
            <span className="sites__description-counter">{props.likes}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

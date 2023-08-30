import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import trashButton from "../images/Trash.svg";
import heartImage from "../images/heart-min.svg";

const Card = (props) => {



  function handleCardClick() {
    props.onOpenImage(props.card);
  }

  function handleDeleteCardPopupForm() {
    props.onDeleteCardClick(props.card);
  }
  

  const currentUser= React.useContext(CurrentUserContext);

  const isOwn = props.card?.owner?._id === currentUser._id;

  const sitesTrashIcon = (
    `sites__trash-icon ${isOwn ? 'sites__trash-icon_visible' : 'sites__icon-icon_hidden'}`
  );


  return (
    <>
      <div className="cards__container">
        <div className="sites__picture-container">
          <img
            onClick={() => handleDeleteCardPopupForm(props.card)}

            src={trashButton}
            alt="yosemite-imagen-vista"
            className={sitesTrashIcon}
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

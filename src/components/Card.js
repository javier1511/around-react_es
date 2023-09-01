import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import trashButton from "../images/Trash.svg";
import heartImage from "../images/heart-min.svg";

const Card = (props) => {

  const handleLikeClick = () => {
    if (props.onCardLike && props.card) {
      props.onCardLike(props.card);
    } else {
      console.error("props.onCardLike or props.card is not defined.");
    }
  }
  

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


const isLiked = props.card.likes.some(i => i._id === currentUser._id);



const sitesDescriptionIcon = `sites__description-icon ${isLiked ? "sites__description-icon-active" : ""}`;

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
              className={sitesDescriptionIcon}
              onClick={handleLikeClick}
            />
            <span className="sites__description-counter">{props.likes}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

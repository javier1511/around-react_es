import React from "react";

import "../index.css";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import Card from "./Card.js";

import ImagePopup from "./ImagePopup.js";

const Main = (props) => {

  

 
 
  
  const currentUser = React.useContext(CurrentUserContext);


  return (
    <>
      <main className="page">
        <div className="separator"></div>
        <div className="profile">
          <div className="profile__picture-container">
            <button
              onClick={props.oneEditAvatarClick}
              className="profile__picture-overlay"
            ></button>
            <img
              src={currentUser && currentUser.avatar}
              alt="imagen-de-perfil"
              className="profile__picture"
            />
          </div>
          <div className="profile__edit-container">
            <h4 className="profile__title">{currentUser && currentUser.name}</h4>
            <button
              onClick={props.oneEditProfileClick}
              type="button"
              className="profile__edit-button"
            ></button>
          </div>
          <div className="profile__job-container">
            <p className="profile__subtitle">{currentUser && currentUser.about}</p>
          </div>
          <div className="profile__plus-container">
            <button
              onClick={props.oneAddPlaceClick}
              type="button"
              className="profile__plus-button"
            ></button>
          </div>
        </div>
  
        
   
        <ImagePopup
          isOpen={props.isImageOpen}
          onClose={props.closeAllPopups}
          selectedCard={props.selectedCard}
        />

        <div className="sites">
        {props.cards.map((card) => {
  return (
    <Card
      card={card} // Pasa la tarjeta completa
      name={card.name}
      link={card.link}
      key={card._id}
      owner={card.owner}
      likes={card.likes.length}
      onOpenImage={props.onOpenImage}
      onDeleteCardClick={props.onDeleteCardClick}
      onCardLike={props.onCardLike}
    />
  );
})}

       
        </div>
       
      </main>
    </>
  );
};

export default Main;

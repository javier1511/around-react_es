import React from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import "../index.css";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import Card from "./Card.jsx";

import ImagePopup from "./ImagePopup.jsx";

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
              src={currentUser.avatar}
              alt="imagen-de-perfil"
              className="profile__picture"
            />
          </div>
          <div className="profile__edit-container">
            <h4 className="profile__title">{currentUser.name}</h4>
            <button
              onClick={props.oneEditProfileClick}
              type="button"
              className="profile__edit-button"
            ></button>
          </div>
          <div className="profile__job-container">
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <div className="profile__plus-container">
            <button
              onClick={props.oneAddPlaceClick}
              type="button"
              className="profile__plus-button"
            ></button>
          </div>
        </div>
  
        
        <PopupWithForm
          isOpen={props.isAddPlacePopupOpen}
          title="Nuevo lugar"
          submitText="Crear"
          onClose={props.closeAllPopups}
          formClassName="form"
          popupContainerClassName="popup__container"
        >
          <input
            type="text"
            name="name"
            className="form__input"
            id="title"
            placeholder="Titulo"
            required
            minLength="2"
            maxLength="30"
          />
          <input
            type="url"
            name="job"
            className="form__input"
            id="url"
            placeholder="Enlace de imagen"
            required
          />
        </PopupWithForm>
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

import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import "../index.css";
import api from "../utils/api.js";
import Card from "./Card.jsx";

import ImagePopup from "./ImagePopup.jsx";

const Main = (props) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserProfile().then((res) => {
      setUserName(res.name);
      setUserAvatar(res.avatar);
      setUserDescription(res.about);
    });
  }, []);

  useEffect(() => {
    api.getCards().then((response) => {
      setCards(response);
    });
  }, []);

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
              src={userAvatar}
              alt="imagen-de-perfil"
              className="profile__picture"
            />
          </div>
          <div className="profile__edit-container">
            <h4 className="profile__title">{userName}</h4>
            <button
              onClick={props.oneEditProfileClick}
              type="button"
              className="profile__edit-button"
            ></button>
          </div>
          <div className="profile__job-container">
            <p className="profile__subtitle">{userDescription}</p>
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
          isOpen={props.isEditAvatarPopupOpen}
          title="Cambiar foto de perfil"
          submitText="Guardar"
          onClose={props.closeAllPopups}
          formClassName="avatar__form"
          popupContainerClassName="avatar__container"
        >
          <input
            type="url"
            name="profile"
            className="avatar__input"
            id="profile-url"
            placeholder="Enlace de imagen"
            required
            maxLength="40"
          />
        </PopupWithForm>
        <PopupWithForm
          isOpen={props.isEditProfilePopupOpen}
          title="Editar Perfil"
          submitText="Guardar"
          onClose={props.closeAllPopups}
          formClassName="form"
          popupContainerClassName="popup__container"
        >
          <input
            type="text"
            name="name"
            className="form__input"
            id="name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="form__error-message" id="name-error"></span>
          <input
            type="text"
            name="job"
            className="form__input"
            id="job"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="form__error-message" id="job-error"></span>
        </PopupWithForm>
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
          {cards.map((card) => {
            return (
              <Card
                name={card.name}
                link={card.link}
                key={card._id}
                likes={card.likes.length}
                onOpenImage={props.onOpenImage}
              />
            );
          })}
          <Card />
        </div>
      </main>
    </>
  );
};

export default Main;

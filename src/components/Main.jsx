import React from "react";
import profileAvatar from "../images/profile-avatar-min.jpg";
import closeIcon from "../images/Close-Icon-min.png";
import trash from "../images/trash.png";
import heart from "../images/heart-min.svg";
import PopupWithForm from "./PopupWithForm.jsx";

const Main = (props) => {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditProfileClick() {
    setIsEditAvatarPopupOpen(true);
  }

  return (
    <>
      <main className="page">
        <div className="separator"></div>
        <div className="profile">
          <div className="profile__picture-container">
            <button className="profile__picture-overlay"></button>
            <img
              src={profileAvatar}
              alt="imagen-de-perfil"
              className="profile__picture"
            />
          </div>
          <div className="profile__edit-container">
            <h4 className="profile__title">Jacques Cousteau</h4>
            <button type="button" className="profile__edit-button"></button>
          </div>
          <div className="profile__job-container">
            <p className="profile__subtitle">Explorador</p>
          </div>
          <div className="profile__plus-container">
            <button
              onClick={()=>{handleEditProfileClick()}}
              type="button"
              className="profile__plus-button"
            ></button>
          </div>
        </div>
        <PopupWithForm open={isEditAvatarPopupOpen} />

        <div className="confirmation">
          <div className="confirmation__container">
            <img
              className="confirmation__close"
              src="../images/Close-Icon-min.png"
              alt="closeIcon"
            />
            <form className="confirmation__form">
              <p className="confirmation__text">¿Estás seguro/a?</p>
              <button className="confirmation__button">Sí</button>
            </form>
          </div>
        </div>

        <div className="avatar">
          <div className="avatar__container">
            <img src={closeIcon} alt="cerrar-icono" className="avatar__close" />
            <form className="avatar__form" noValidate>
              <h2 className="avatar__text">Cambiar foto de perfil</h2>
              <input
                type="url"
                name="profile"
                className="avatar__input"
                id="profile-url"
                placeholder="Enlace de imagen"
                required
              />
              <button id="save__profile" className="avatar__button">
                Guardar
              </button>
            </form>
          </div>
        </div>

        <div className="overlay"></div>
        <div className="sites">
          <template className="template">
            <div className="cards__container">
              <div className="sites__picture-container">
                <img
                  src={trash}
                  alt="yosemite-imagen-vista"
                  className="sites__trash-icon"
                />
                <img src=" " alt="" className="sites__picture" />
              </div>
              <div className="sites__description-container">
                <p className="sites__description-text">Valle de Yosemite</p>
                <div className="like__container">
                  <img
                    src={heart}
                    alt="me-gusta-imagen"
                    className="sites__description-icon"
                  />
                  <span className="sites__description-counter"></span>
                </div>
              </div>
            </div>
          </template>
        </div>

        <div className="modal">
          <img src={closeIcon} alt="" className="modal__close-button" />
          <div className="modal__container">
            <img src=" " alt="" className="modal__picture" />
            <span className="modal__text-subtitle"></span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;

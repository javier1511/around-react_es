import React from "react";
import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {

    const avatar = React.useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      props.onUpdateAvatar(avatar.current.value);
      props.onClose();
    };
   useEffect(() => {
      avatar.current.value = "";
    }, [props.isOpen]);

    return(
        <PopupWithForm
        isOpen={props.isOpen}
        title="Cambiar foto de perfil"
        submitText="Guardar"
        onClose={props.onClose}
        formClassName="avatar__form"
        popupContainerClassName="avatar__container"
        onSubmit={handleSubmit}
      >
        <input
          type="url"
          name="profile"
          className="avatar__input"
          id="profile-url"
          placeholder="Enlace de imagen"
          required
          ref={avatar}
        />
      </PopupWithForm>


    );
}

export default EditAvatarPopup
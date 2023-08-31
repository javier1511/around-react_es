import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = (props) => { 

  const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      props.onUpdateUser({ name, about: description });
    }
    props.onClose();
  };
  
 
  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, props.isOpen]);
  

    return (

        <PopupWithForm
          isOpen={props.isOpen}
          title="Editar Perfil"
          submitText="Guardar"
          onClose={props.onClose}
          formClassName="form"
          popupContainerClassName="popup__container"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            className="form__input"
            id="name"
            required
            minLength="2"
            maxLength="40"
            value={name || ""}
            onChange={handleChangeName}
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
            value={description || ""}
            onChange={handleChangeDescription}s
          />
          <span className="form__error-message" id="job-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup
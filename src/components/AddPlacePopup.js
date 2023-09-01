import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => { // Cambio "addPlacePopup" por "AddPlacePopup"


    const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  const handleChangeTitle = (e) => {
    setName(e.target.value);
  };
  const handleChangeLink = (e) => {
    setLink(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('onAddPlaceSubmit:', props.onAddPlaceSubmit); // Check the value
    props.onAddPlaceSubmit({
      name,
      link,
    });
  
    props.onClose();
  };
  
  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            title="Nuevo lugar"
            submitText="Crear"
            onClose={props.onClose}
            formClassName="form"
            popupContainerClassName="popup__container"
            onSubmit={handleSubmit}
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
                onChange={handleChangeTitle}
                value={name || ""}
            />
            <input
                type="url"
                name="job"
                className="form__input"
                id="url"
                placeholder="Enlace de imagen"
                required
                onChange={handleChangeLink}
            value={link || ""}
            />
        </PopupWithForm> 
    );
}

export default AddPlacePopup; 


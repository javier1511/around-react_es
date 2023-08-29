import React from "react";
import PopupWithForm from "./PopupWithForm";

const DeleteCardPopup = (props) => {

  const handleSubmitDeleteCard = (e) => {
    console.log("Selected card:", props.selectedCard); // Verificar si selectedCard se pasa correctamente
    e.preventDefault();
    props.onDeleteCard(props.selectedCard._id);
    props.onClose();
  };
  
    return (
      <PopupWithForm
        title="¿Estás seguro/a?"
        submitText="Si"
        isOpen={props.isOpen}
        formClassName="form"
        popupContainerClassName="popup__container"
        onSubmit={handleSubmitDeleteCard}
        onClose={props.onClose}
        
        
      
      />
       
     
    );
  };
  
  export default DeleteCardPopup;
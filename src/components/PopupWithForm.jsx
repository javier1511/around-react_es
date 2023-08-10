import React from "react";
import closeIcon from "../images/Close-Icon-min.png";
import '../index.css';

const PopupWithForm = (props) => {
return (
    <div className={`popup ${props.isOpen ? "popup__opened" : " "}`}>
    <div className={props.popupContainerClassName}>
        <img
        className="popup__close-icon"
        src={closeIcon}
        onClick={props.onClose}/>
        <form className={props.formClassName} noValidate>
        <h2 className="form__title">{props.title}</h2>
        {props.children}

        <button
            id="save__button"
            className="form__button form__submit-inactive" >
            {props.submitText}
        </button>
        </form>
 </div>
    </div>
);
};

export default PopupWithForm;

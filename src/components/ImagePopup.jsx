import React from "react";
import closeIcon from "../images/Close-Icon-min.png";

export default function imagePopup (props) {
    return (

        <div className={`modal ${props.isOpen ? "popup__opened" : " "}`}>
        <img src= {closeIcon} onClick={props.onClose} alt="" className="modal__close-button"/>
           <div className="modal__container">
            <img src={props.selectedCard.link}  alt="" className="modal__picture"/>
            <span className="modal__text-subtitle">{props.selectedCard.name}</span>
           </div>
      </div>
    )
}
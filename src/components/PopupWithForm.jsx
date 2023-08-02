import React from "react";

const PopupWithForm = (props) => {
  const popupStyle = {
    display: props.open ? 'block' : 'none'
  };

  return (
    <>
      <div className="popup" style={popupStyle}>
        <div className="Popup__container">
          <img className="popup__close-icon" src="" />
          <form className="form" noValidate>
            <h2 className="form__title">{props.title}</h2>
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
            <button
              id="save__button"
              className="form__button form__submit-inactive"
            >
              {props.submitText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopupWithForm;

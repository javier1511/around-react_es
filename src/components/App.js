import '../index.css';
import Main from "./Main.jsx";
import Header from './Header.jsx';
import EditProfilePopup from './EditProfilePopup';
import React, { useState, useEffect } from "react";
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext';
import DeleteCardPopup from './DeleteCardPopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [cards, setCards] = useState([]);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);

  function handleImageOpenClick(card) {
    setSelectedCard(card);
    setIsImageOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleDeleteCardPopup(card) {
    setSelectedCard(card);
    setIsDeleteCardPopupOpen(true);
  }

  function handleAddNewPlace() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarPopupOpen() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImageOpen(false);
    setIsDeleteCardPopupOpen(false);
  }

  useEffect(() => {
    api.getUserProfile().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  useEffect(() => {
    api.getCards().then((data) => {
      setCards(data);
    });
  }, []);

  const handleRemoveCard = (cardId) => {
    console.log(cardId); // Verificar si cardId se pasa correctamente
    api.removeCardFromApi(cardId, () =>
      setCards((state) => state.filter((i) => i._id !== cardId))
    );
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    api.addLike(card._id, isLiked).then((newCard) => {
      setCards((state) =>
        state.map((i) => (i._id === card._id ? newCard : i))
      );
    });
  };

  const handleEditProfile = ({ name, about, avatar }) => {
    api.patchUserProfile(name, about, avatar, (updatedProfile) => {
      setCurrentUser(updatedProfile);
    });
  };

  const handleUpdateAvatar = (link) => {
    api.changeAvatarProfile(link).then((data) => {
      setCurrentUser({ ...currentUser, avatar: data.avatar });
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          oneEditProfileClick={handleEditProfileClick}
          oneAddPlaceClick={handleAddNewPlace}
          oneEditAvatarClick={handleEditAvatarPopupOpen}
          closeAllPopups={closeAllPopups}
          isImageOpen={isImageOpen}
          onOpenImage={handleImageOpenClick}
          selectedCard={selectedCard}
          cards={cards}
          onDeleteCardClick={handleDeleteCardPopup}
          onCardLike={handleCardLike}
        />

        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          selectedCard={selectedCard}
          onDeleteCard={handleRemoveCard}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleEditProfile}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <footer className="footer">
          <p className="footer__copyright">© 2021 Alrededor de los EEUU</p>
        </footer>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

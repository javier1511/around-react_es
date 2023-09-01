import '../index.css';
import Main from "./Main.js";
import Header from './Header.js';
import EditProfilePopup from './EditProfilePopup';
import React, { useState, useEffect } from "react";
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext';
import DeleteCardPopup from './DeleteCardPopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

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
    try {
      const isLiked = card.likes.some((like) => like._id === currentUser._id);
  
      if (isLiked) {
        api.removeLike(card._id).then((newCard) => {
          setCards((state) =>
            state.map((i) => (i._id === card._id ? newCard : i))
          );
        });
      } else {
        api.addLike(card._id).then((newCard) => {
          setCards((state) =>
            state.map((i) => (i._id === card._id ? newCard : i))
          );
        });
      }
    } catch (error) {
      console.error("Error in handleCardLike:", error);
    }
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

  const handleAddPlaceSubmit = ({name, link}) => {
    api.addNewCardFromApi({name, link}).then((newPlace) => {
      setCards([newPlace, ...cards]);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          
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
        <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlaceSubmit={handleAddPlaceSubmit}

        />

        <footer className="footer">
          <p className="footer__copyright">© 2021 Alrededor de los EEUU</p>
        </footer>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
